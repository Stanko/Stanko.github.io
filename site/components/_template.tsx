import clsx from 'clsx';

export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {};

const Component = async ({
  children,
  className = '',
  ...props
}: ComponentProps) => {
  return (
    <div {...props} className={clsx('component', className)}>
      {children}
    </div>
  );
};

export default Component;
