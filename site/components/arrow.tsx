import clsx from 'clsx';

interface ArrowProps extends React.SVGAttributes<SVGElement> {}

const Arrow = ({ className = '', ...props }: ArrowProps) => {
  return (
    <svg
      viewBox="0 0 30 20"
      aria-hidden="true"
      className={clsx(className, 'arrow-icon')}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M 0 10 30 10 20 0 30 10 20 20" />
    </svg>
  );
};

export default Arrow;
