import clsx from 'clsx';

interface SearchIconProps extends React.SVGAttributes<SVGElement> {}

const SearchIcon = ({ className = '', ...props }: SearchIconProps) => {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className={clsx(className, 'search-icon')}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      >
        <circle cx="10" cy="10" r="10"></circle>
        <path d="M 17.07 17.07 l 10 10"></path>
      </g>
    </svg>
  );
};

export default SearchIcon;
