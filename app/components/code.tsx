import Clipboard from '@site/components/clipboard';
import clsx from 'clsx';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children?: React.ReactNode;
}

const Code = ({ children, className = '', title, ...props }: CodeProps) => {
  return (
    <div className={clsx('code', className)} {...props}>
      <div className="code__header">
        {title}
        <button className="code__copy">
          <span className="tooltip">Copy</span>
          <Clipboard />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Code;
