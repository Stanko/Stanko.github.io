import { markdownToHTML } from '@brz/lib/markdown-to-html';
import clsx from 'clsx';

type InlineMarkdownProps = {
  className?: string;
  content: string;
};

const InlineMarkdown = async ({
  content,
  className = '',
}: InlineMarkdownProps) => {
  const html = await markdownToHTML(content);
  const inline = html.replace(/<p>/g, '').replace(/<\/p>/g, '');

  return (
    <span
      className={clsx('inline__markdown', className)}
      dangerouslySetInnerHTML={{
        __html: inline,
      }}
    />
  );
};

export default InlineMarkdown;
