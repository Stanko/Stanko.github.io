import clsx from 'clsx';

const Wave = ({
  className = '',
  ...props
}: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 1000 40" className={clsx('wave', className)} {...props}>
      <path
        d="M 0.25 -5 L 0,0 L 500 40 L 1000,0.25 L 1000,-5 z"
        className="wave__fill"
      />
      <path
        d="M-2000 -160 L 500 40 L 3000,-160 L 3000 42 L -2000 42"
        className="wave__mask"
      />
      <path
        d="M-2000 -160 L 500 40 L 3000,-160"
        fill="none"
        vectorEffect="non-scaling-stroke"
        className="wave__border"
      />
    </svg>
  );
};

export default Wave;
