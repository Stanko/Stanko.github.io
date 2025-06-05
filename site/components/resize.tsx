import clsx from 'clsx';

export type ResizeProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: 'horizontal' | 'vertical' | 'both';
};

const Resize = async ({
  children,
  className = '',
  direction = 'both',
  ...props
}: ResizeProps) => {
  return (
    <div {...props} className={clsx('resize', className)}>
      {children}
      <button
        className="resize__handle"
        type="button"
        aria-label="Resize handle"
      >
        <span />
      </button>
    </div>
  );
};

export default Resize;
