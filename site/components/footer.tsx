import clsx from 'clsx';
import Logo from './logo';
import { navLinks } from './nav';
import SearchIcon from './search';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  pathname?: string;
}

const Footer = ({
  children,
  className = '',
  pathname,
  ...props
}: FooterProps) => {
  return (
    <footer className={clsx('footer', className)} {...props}>
      <div className="container">
        <a href="/" className="footer__home-link">
          <Logo className="footer__logo" />
        </a>

        <div className="footer__content">
          <nav className="footer__nav">
            {navLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={clsx('footer__nav-link', link.theme, {
                    'footer__nav-link--active': link.href === pathname,
                    'link-underline': link.href !== pathname,
                  })}
                >
                  {link.label}
                </a>
              );
            })}
            <button className="footer__nav-link link-underline open-menu">
              Search <SearchIcon className="footer__search-icon" />
            </button>
          </nav>

          <div>
            <p>&copy; 2016-2025. All rights reserved.</p>
            <p>Written with ♡ by Stanko Tadić.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
