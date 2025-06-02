import { markdownToHTML } from '@brz/lib/markdown-to-html';

type SidenoteProps = {
  note: string;
  children: string;
};

const Sidenote = async ({ note, children }: SidenoteProps) => {
  const html = await markdownToHTML(note);
  const inline = html.replace(/<p>/g, '').replace(/<\/p>/g, '');

  return (
    <>
      <span className="sidenote__text" tabIndex={0} role="button">
        {children}
      </span>
      <span className="sidenote__note">
        <span className="sidenote__note-inner">
          <span
            className="sidenote__note-text"
            dangerouslySetInnerHTML={{
              __html: inline,
            }}
          />
        </span>
      </span>
    </>
  );
};

export default Sidenote;
