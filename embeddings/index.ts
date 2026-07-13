import cosineSimilarity from 'compute-cosine-similarity';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const DOCS_DIR = './site/content/blog';
const MODEL: 'small' | 'large' = 'large';
const CACHE_DIR = `./embeddings/cache-${MODEL}`;
const SIMILARITY_THRESHOLD = 0.5;
const OUTPUT_FILE = `./embeddings/results-${MODEL}-${SIMILARITY_THRESHOLD}.json`;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}-/;

type SourceDocument = {
  text: string;
  name: string;
  hash: string;
};

type EmbeddedDocument = {
  name: string;
  hash: string;
  embedding: number[];
};

type RelatedDoc = {
  score: number;
  post: string;
};

function cleanMarkdown(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, '') // Frontmatter
    .replace(/```[\s\S]*?```/g, '') // Code blocks
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/#+\s/g, '') // Headers
    .replace(/\s+/g, ' ') // Extra whitespace
    .trim();
}

function loadCache(): Map<string, EmbeddedDocument> {
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const documents = fs
    .readdirSync(CACHE_DIR)
    .filter((file) => file.endsWith('.json'))
    .map(
      (file) =>
        JSON.parse(
          fs.readFileSync(path.join(CACHE_DIR, file), 'utf-8')
        ) as EmbeddedDocument
    );

  return new Map(documents.map((document) => [document.name, document]));
}

function getDocumentsToEmbed(cache: Map<string, EmbeddedDocument>): {
  documents: SourceDocument[];
  skipped: number;
} {
  const documents: SourceDocument[] = [];
  let skipped = 0;

  for (const entry of fs.readdirSync(DOCS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }

    const name = entry.name.replace(DATE_REGEX, '');
    const raw = fs.readFileSync(
      path.join(DOCS_DIR, entry.name, 'index.mdx'),
      'utf-8'
    );
    const hash = crypto.createHash('md5').update(raw).digest('hex');

    if (cache.get(name)?.hash === hash) {
      skipped++;
      continue;
    }

    documents.push({
      text: cleanMarkdown(raw),
      name,
      hash,
    });
  }

  return { documents, skipped };
}

async function embedDocuments(
  documents: SourceDocument[]
): Promise<EmbeddedDocument[]> {
  if (documents.length === 0) {
    return [];
  }

  console.time('embeddings');
  const response = await openai.embeddings.create({
    model: `text-embedding-3-${MODEL}`,
    input: documents.map((document) => document.text),
  });
  console.timeEnd('embeddings');

  return documents.map((document, index) => {
    const embedding = response.data[index]?.embedding;

    if (!embedding) {
      throw new Error(`Missing embedding for ${document.name}`);
    }

    const embeddedDocument = {
      name: document.name,
      hash: document.hash,
      embedding,
    };

    fs.writeFileSync(
      path.join(CACHE_DIR, `${document.name}.json`),
      JSON.stringify(embeddedDocument)
    );

    return embeddedDocument;
  });
}

function findRelatedDocuments(
  documents: EmbeddedDocument[]
): Record<string, RelatedDoc[]> {
  const relatedDocuments = Object.fromEntries(
    documents.map((document) => [document.name, [] as RelatedDoc[]])
  );

  for (let i = 0; i < documents.length; i++) {
    const document = documents[i]!;

    for (let j = i + 1; j < documents.length; j++) {
      const otherDocument = documents[j]!;
      const score = cosineSimilarity(
        document.embedding,
        otherDocument.embedding
      );

      if (score && score >= SIMILARITY_THRESHOLD) {
        relatedDocuments[document.name]!.push({
          post: otherDocument.name,
          score,
        });
        relatedDocuments[otherDocument.name]!.push({
          post: document.name,
          score,
        });
      }
    }
  }

  for (const related of Object.values(relatedDocuments)) {
    related.sort((a, b) => b.score - a.score);
  }

  return relatedDocuments;
}

async function main() {
  const documents = loadCache();
  const { documents: documentsToEmbed, skipped } =
    getDocumentsToEmbed(documents);
  const newDocuments = await embedDocuments(documentsToEmbed);

  console.log(
    `Embeddings: ${skipped} skipped, ${newDocuments.length} calculated`
  );

  for (const document of newDocuments) {
    documents.set(document.name, document);
  }

  console.time('similarity');
  const relatedDocuments = findRelatedDocuments([...documents.values()]);
  console.timeEnd('similarity');

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(relatedDocuments, null, 2));
  console.log(
    `Done! Output saved to ${OUTPUT_FILE}, documents processed: ${documents.size}`
  );
}

main().catch(console.error);
