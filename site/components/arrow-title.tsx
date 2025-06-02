import clsx from 'clsx';
import Arrow from './arrow';

export type ArrowTitleProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: 'md' | 'lg';
  reversed?: boolean;
};

const ArrowTitle = async ({
  children,
  className = '',
  size = 'md',
  reversed = false,
  ...props
}: ArrowTitleProps) => {
  return (
    <div
      {...props}
      className={clsx('arrow-title', `arrow-title--${size}`, className, {
        'arrow-title--reversed': reversed,
      })}
    >
      {reversed && <Arrow />}
      {children}
      {!reversed && <Arrow />}
    </div>
  );
};

export default ArrowTitle;
