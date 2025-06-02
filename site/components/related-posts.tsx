import clsx from 'clsx';
import type { BlogPost } from '@site/content/blog';
import { formatDate } from '@brz/utils/format-date';
import ArrowTitle from './arrow-title';
import Favorite from './favorite';
import Dev from './dev';

export type RelatedPost = BlogPost & {
  score: number;
};

interface RelatedPostsProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: string;
  posts: RelatedPost[];
  children?: React.ReactNode;
}

const RelatedPosts = ({
  children,
  className = '',
  title,
  posts,
  ...props
}: RelatedPostsProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className={clsx('related-posts', className)} {...props}>
      <div className="container">
        <h3 className="related-posts__title">{title}</h3>

        <div className="related-posts__posts">
          {posts.map((post) => {
            return (
              <a
                className={clsx(
                  'related-posts__post',
                  post.pageData.theme || 'blue'
                )}
                href={post.pathname}
                key={post.pathname}
              >
                <time
                  dateTime={post.pageData.date}
                  className="text-neutral-500 text-sm"
                >
                  {formatDate(post.pageData.date)}
                </time>
                <Dev>
                  <span className="text-neutral-500 text-sm">
                    {' '}
                    &bull; {post.score.toFixed(2)}
                  </span>
                </Dev>
                <ArrowTitle>
                  {post.pageData.favorite && <Favorite />}{' '}
                  {post.pageData.titlePlain}
                </ArrowTitle>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
