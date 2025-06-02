import { Fragment } from 'react';
import clsx from 'clsx';
import Logo from './logo';
import SearchIcon from './search';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  pathname: string;
}

export const navLinks = [
  { href: '/art/', label: 'Art', theme: 'red', main: true },
  { href: '/blog/', label: 'Blog', theme: 'blue', main: true },
  { href: '/projects/', label: 'Projects', theme: 'purple', main: true },
  { href: '/about/', label: 'About', theme: 'blue', main: true },
  { href: '/stats/', label: 'Stats', theme: 'blue' },
  { href: '/atom.xml', label: 'RSS feed' },
  { href: 'https://github.com/stanko', label: 'GitHub' },
];

const Nav = ({ children, className = '', pathname, ...props }: NavProps) => {
  return (
    <div className={clsx('nav', className)} {...props}>
      <div className="nav__strip" />
      <div className="nav__content container">
        <a href="/" aria-label="Home" className="nav__home-link">
          <Logo className="nav__logo" />
        </a>

        <button className="nav__hamburger open-menu">
          <svg viewBox="0 0 16 12">
            <path
              d="M 1 1 L 15 1 M 1 6 L 15 6 M 1 11 L 15 11"
              strokeWidth="2"
              strokeLinecap="round"
              stroke="currentColor"
              aria-hidden="true"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </button>
        <nav className="nav__links">
          {navLinks.map((link) => {
            if (!link.main) {
              return null;
            }

            return (
              <Fragment key={link.href}>
                <a
                  href={link.href}
                  key={link.href}
                  className={clsx('nav__link', {
                    'nav__link--active': link.href === pathname,
                    'link-underline': link.href !== pathname,
                  })}
                >
                  {link.label}
                </a>
                <svg
                  viewBox="0 0 4 12"
                  className="nav__separator"
                  aria-hidden="true"
                >
                  {/* <path d="M 4 0 L 0 12" /> */}
                  <circle cx="2" cy="6" r="1" />
                </svg>
              </Fragment>
            );
          })}
          <button className="nav__link link-underline open-menu">
            Search
            <SearchIcon className="nav__search-icon" />
          </button>
        </nav>
      </div>

      <button
        className="nav__hamburger nav__hamburger--fixed nav__hamburger--hidden open-menu"
        tabIndex={-1}
      >
        <svg viewBox="0 0 16 12">
          <path
            d="M 1 1 L 15 1 M 1 6 L 15 6 M 1 11 L 15 11"
            strokeWidth="2"
            strokeLinecap="round"
            stroke="currentColor"
            aria-hidden="true"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </button>
    </div>
  );
};

export default Nav;
