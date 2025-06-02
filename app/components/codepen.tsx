type CodepenProps = React.HTMLAttributes<HTMLIFrameElement> & {
  className?: string;
  height?: number;
  htmlId?: string;
  id: string;
  theme: 'light' | 'dark' | '';
  title?: string;
};

const Codepen = ({
  className = '',
  height = 350,
  htmlId,
  id,
  theme = 'light',
  title,
  ...props
}: CodepenProps) => {
  return (
    <iframe
      {...props}
      className={`codepen-iframe ${className}`}
      height={height}
      id={htmlId}
      title={title}
      src={`https://codepen.io/stanko/embed/${id}?default-tab=result&theme-id=${theme}`}
      loading="lazy"
      allowFullScreen={true}
    />
  );
};

export default Codepen;
