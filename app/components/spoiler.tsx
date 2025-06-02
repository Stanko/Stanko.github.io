import { getRandomString } from '@brz/lib/get-random-string';
import clsx from 'clsx';

export type SpoilerProps = React.HTMLAttributes<HTMLDivElement> & {
  hide?: string;
  show?: string;
  expanded?: boolean;
};

const Spoiler = ({
  children,
  hide = 'Hide',
  show = 'Show',
  expanded = false,
  ...props
}: SpoilerProps) => {
  const id = getRandomString();

  return (
    <div className="spoiler" {...props}>
      <div
        className={clsx('spoiler__content-wrapper', {
          'spoiler__content-wrapper--expanded': expanded,
        })}
        id={id}
      >
        <div className="spoiler__content">{children}</div>
      </div>

      <button
        className="spoiler__toggle btn btn--sm"
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span className="spoiler__toggle-show">{show}</span>
        <span className="spoiler__toggle-hide">{hide}</span>
      </button>
    </div>
  );
};

export default Spoiler;
