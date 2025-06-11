import clsx from 'clsx';

interface CirclePatternProps extends React.SVGAttributes<SVGElement> {}

const CirclePattern = ({ className = '', ...props }: CirclePatternProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('circle-pattern', className)}
      viewBox="0 0 200 200"
      {...props}
    >
      <use href="#circle-pattern-symbol" x="0" />
      <use href="#circle-pattern-symbol" x="100" />
      <use href="#circle-pattern-symbol" y="100" />
      <use href="#circle-pattern-symbol" x="100" y="100" />
    </svg>
  );
};

export default CirclePattern;
