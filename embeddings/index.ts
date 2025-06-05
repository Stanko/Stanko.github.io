import cosineSimilarity from 'compute-cosine-similarity';
import crypto from 'node:crypto';
import fs, { statSync } from 'node:fs';
import path from 'node:path';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const DOCS_DIR = './site/content/blog';
// const MODEL = 'small';
const MODEL = 'large';
const CACHE_DIR = `./embeddings/cache-${MODEL}`;
const SIMILARITY_THRESHOLD = 0.6;
const OUTPUT_FILE = `./embeddings/results-${MODEL}-${SIMILARITY_THRESHOLD}.json`;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}-/;

function cleanMarkdown(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, '') // Frontmatter
    .replace(/```[\s\S]*?```/g, '') // Code blocks
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/#+\s/g, '') // Headers
    .replace(/\s+/g, ' ') // Extra whitespace
    .trim();
}

async function getEmbeddings(texts: string[]) {
  const response = await openai.embeddings.create({
    model: `text-embedding-3-${MODEL}`,
    input: texts,
  });

  return response.data.map((d) => d.embedding);
}

type Doc = {
  text: string;
  name: string;
  embedding: number[];
  hash: string;
};

async function main() {
  const files = fs.readdirSync(DOCS_DIR);
  const mdxFiles = [];
  for (const file of files) {
    if (statSync(path.join(DOCS_DIR, file)).isDirectory()) {
      mdxFiles.push({
        name: file.replace(DATE_REGEX, ''),
        path: path.join(DOCS_DIR, file, 'index.mdx'),
      });
    }
  }

  // Load cached embeddings
  const cache: Record<string, Doc> = {};
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
  const cacheFiles = fs.readdirSync(CACHE_DIR);

  for (const file of cacheFiles) {
    if (file.endsWith('.json')) {
      const fullPath = path.join(CACHE_DIR, file);
      const value = JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as Doc;

      cache[value.name] = value;
    }
  }

  const documents: Record<string, Doc> = {};

  for (const file of mdxFiles) {
    const raw = fs.readFileSync(file.path, 'utf-8');
    const { name } = file;

    const hash = crypto.createHash('md5').update(raw).digest('hex');

    if (cache[name] && cache[name].hash === hash) {
      console.log(`Skipping ${name} (cached)`);
      continue;
    }

    documents[name] = {
      text: cleanMarkdown(raw),
      name,
      hash,
      embedding: [],
    };
  }

  const filenames = Object.keys(documents);
  const texts = Object.values(documents).map((doc) => doc.text);

  if (filenames.length > 0) {
    // Get embeddings from OpenAI
    console.time('embeddings');
    const embeddings = await getEmbeddings(texts);
    console.timeEnd('embeddings');

    // Save embeddings to cache
    embeddings.forEach((embedding, index) => {
      const name = filenames[index];
      const cachePath = path.join(CACHE_DIR, `${name}.json`);
      documents[name].embedding = embedding;

      fs.writeFileSync(
        cachePath,
        JSON.stringify({ name, hash: documents[name].hash, embedding })
      );
    });
  }

  const relatedDocs: Record<string, { score: number; post: string }[]> = {};

  const data = {
    ...cache,
    ...documents,
  };
  const names = Object.keys(data);

  console.time('similarity');
  for (const name of names) {
    relatedDocs[name] = [];
  }

  for (let i = 0; i < names.length; i++) {
    const name1 = names[i];
    const v1 = data[name1].embedding;

    for (let j = i + 1; j < names.length; j++) {
      const name2 = names[j];
      const v2 = data[name2].embedding;
      const score = cosineSimilarity(v1, v2);

      if (score && score >= SIMILARITY_THRESHOLD) {
        relatedDocs[name1].push({
          post: name2,
          score,
        });
        relatedDocs[name2].push({
          post: name1,
          score,
        });
      }
    }
  }
  for (const file of Object.keys(relatedDocs)) {
    relatedDocs[file].sort((a, b) => b.score - a.score);
  }
  console.timeEnd('similarity');

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(relatedDocs, null, 2));

  console.log(
    `Done! Output saved to ${OUTPUT_FILE}, documents processed: ${names.length}`
  );
}

main().catch((err) => console.error(err));
