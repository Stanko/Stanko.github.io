import clsx from 'clsx';

export type NoticeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: 'info' | 'warning' | 'error';
};

const Notice = async ({
  children,
  className = '',
  variant,
  ...props
}: NoticeProps) => {
  return (
    <div {...props} className={clsx('notice', `notice--${variant}`, className)}>
      {children}
    </div>
  );
};

export default Notice;
