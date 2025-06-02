import { brz } from '@brz';
import { formatDate } from '@brz/utils/format-date';
import { paint } from '@brz/utils/log';
import Comments from '@site/components/comments';
import Header from '@site/components/header';
import Keyboard from '@site/components/keyboard';
import RelatedPosts, { type RelatedPost } from '@site/components/related-posts';
import Share from '@site/components/share';
import { config } from '@site/config';
import type { BlogPost } from '@site/content/blog';
import { getSlug } from '@site/lib/get-slug';
import similarity from '../../embeddings/results-large-0.6.json';
import Notice from '../components/notice';
import BaseTemplate from './base';

export type BlogPostTemplateProps = {
  children: React.ReactNode;
  dirPath?: string;
  outputDir?: string;
  pathname: string;
  data: {
    date: string;
    baseUrl?: string;
    head?: React.ReactNode;
    image?: string;
    lang?: string;
    rssFeeds?: { title: string; href: string }[];
    siteName?: string;
    theme?: string;
    slug: string;
    title: string;
    titlePlain: string;
    url?: string;
    minutes: number;
    category: string[];
    draft?: boolean;
    intro?: string;
    snippet: string;
  };
};

const BlogPostTemplate = async ({
  children,
  pathname,
  dirPath,
  outputDir,
  data: {
    slug,
    date,
    title,
    titlePlain,
    baseUrl,
    url,
    theme = 'blue',
    category,
    minutes,
    draft,
    image,
    intro,
    snippet,
  },
}: BlogPostTemplateProps) => {
  // TODO remove drafts
  const embeddings = similarity as Record<
    string,
    { post: string; score: number }[]
  >;

  let relatedEmbeddings = embeddings[slug];

  const posts = brz.pages.getCollection('blog') as BlogPost[];

  if (relatedEmbeddings === undefined) {
    console.log(
      paint.yellow('embeddings:'),
      `No embeddings found for "${pathname}".`
    );

    relatedEmbeddings = [];
  }

  if (relatedEmbeddings.filter((r) => r.score > 0.7).length >= 3) {
    relatedEmbeddings = relatedEmbeddings.filter((r) => r.score > 0.7);
  } else {
    relatedEmbeddings = relatedEmbeddings.slice(0, 3);
  }

  const relatedPosts: RelatedPost[] = relatedEmbeddings
    .map((related) => {
      const post = posts.find((post) => {
        return post.pageData.slug === related.post;
      });

      if (post) {
        return {
          ...post,
          score: related.score,
        };
      }

      return null;
    })
    .filter((p) => p !== null);

  return (
    <BaseTemplate
      pathname={pathname}
      dirPath={dirPath}
      outputDir={outputDir}
      title={titlePlain}
      description={intro || snippet}
      baseUrl={baseUrl}
      url={url}
      theme={theme}
      image={image}
    >
      <Header
        eyebrow={
          <time dateTime={date} className="text-neutral-500 text-sm">
            {formatDate(date)}
          </time>
        }
        title={title}
        isDraft={draft}
        className="blog-post__header"
      >
        <p className="text-sm">
          Posted in{' '}
          <a href={`/archive/#${getSlug(category[0] || '')}`}>{category[0]}</a>{' '}
          · {minutes} {minutes > 1 ? 'minutes' : 'minute'} read
        </p>
      </Header>

      <Keyboard />

      <main className="blog-post page-padding">
        <article className="article">
          {category[0] === 'Jekyll' && (
            <Notice variant="warning">
              Please note that I'm not using Jekyll anymore, so this post might
              be outdated.
            </Notice>
          )}
          {children}
        </article>
      </main>

      <Share title={titlePlain} url={config.baseUrl + pathname} />

      <RelatedPosts title="Related posts" posts={relatedPosts} />

      <Comments slug={slug} theme={theme} />
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
