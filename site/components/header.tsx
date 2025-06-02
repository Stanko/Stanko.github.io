import clsx from 'clsx';
import Wave from './wave';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: string;
  isDraft?: boolean;
  children?: React.ReactNode;
}

const Header = ({
  children,
  className = '',
  eyebrow,
  title,
  isDraft,
  ...props
}: HeaderProps) => {
  return (
    <header className={clsx('header', className)} {...props}>
      <div className="header__content container">
        {eyebrow}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {isDraft && <h4>[DRAFT]</h4>}
        <div className="header__children">{children}</div>
      </div>
      <Wave />
    </header>
  );
};

export default Header;
