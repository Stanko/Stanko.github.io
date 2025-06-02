import { dirs } from '@brz';
import { markdownToHTML } from '@brz/lib/markdown-to-html';
import { formatDateObject } from '@brz/utils/format-date';
import { stripHTMLTags } from '@brz/utils/strip-html-tags';
import clsx from 'clsx';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import ArrowTitle from './arrow-title';

interface CommentsProps extends React.HTMLAttributes<HTMLElement> {
  slug: string;
  theme?: string;
}

type Comment = {
  comment_id: string;
  slug: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

const renderComments = (comments: Comment[], theme = 'blue') => {
  return comments.map(async (comment) => {
    const isMuffinMan = comment.email === 'muffinman';
    const message = await markdownToHTML(
      isMuffinMan ? comment.message : stripHTMLTags(comment.message)
    );

    return (
      <div key={comment.comment_id} className="comments__comment">
        <div className="comments__comment-date text-xs">
          {formatDateObject(new Date(comment.date))}
        </div>
        <ArrowTitle className="comments__comment-name">
          {isMuffinMan ? (
            <img src={`/favicon/${theme}/icon-180.png`} aria-hidden="true" />
          ) : (
            <img
              src={`https://www.gravatar.com/avatar/${comment.email}?d=mm&r=g`}
              aria-hidden="true"
            />
          )}

          {comment.name}
        </ArrowTitle>

        <div
          className="comments__comment-message text-sm"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    );
  });
};

const Comments = ({ className = '', slug, theme, ...props }: CommentsProps) => {
  const commentsDirs = join(dirs.COMMENTS, slug);

  if (!existsSync(commentsDirs)) {
    return null;
  }

  const paths = readdirSync(commentsDirs).map((file) => {
    return join(commentsDirs, file);
  });

  const comments = paths
    .map((path) => {
      const content = readFileSync(path, { encoding: 'utf-8' });
      return Bun.TOML.parse(content) as Comment;
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className={clsx('comments', className)} {...props}>
      <h3 className="container text-neutral-500">
        Comments ({comments.length})
      </h3>

      {/* NICE render 5 and a show all button */}
      <div className="comments__list article">
        {renderComments(comments, theme)}
      </div>
    </div>
  );
};

export default Comments;
