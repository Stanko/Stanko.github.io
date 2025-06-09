import clsx from 'clsx';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  sm?: number;
  md?: number;
  lg?: number;
  gap?: number;
};

const Grid = async ({
  children,
  sm = 2,
  md = 2,
  lg = 2,
  gap = 1,
  className = '',
  ...props
}: GridProps) => {
  return (
    <div
      {...props}
      className={clsx('grid', className)}
      style={
        {
          ...props.style,
          '--columns': sm,
          '--columns-md': md,
          '--columns-lg': lg,
          '--gap': `${gap}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
