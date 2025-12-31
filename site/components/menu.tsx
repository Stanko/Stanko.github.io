import clsx from 'clsx';
import Logo from './logo';
import { navLinks } from './nav';
import Arrow from './arrow';

interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const MenuNav = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(className, 'menu__links')}>
      {navLinks.map((link) => {
        return (
          <a
            href={link.href}
            key={link.href}
            className={clsx('menu__link', link.theme, {
              h1: link.main,
              h4: !link.main,
            })}
          >
            {link.label}
            <Arrow className="menu__link-arrow" />
          </a>
        );
      })}
    </div>
  );
};

const Menu = ({ children, className = '', ...props }: MenuProps) => {
  return (
    <dialog className={clsx('menu', className)} {...props}>
      <div className="menu__strip" />
      <div className="menu__backdrop" />

      <div className="menu__content">
        <div className="container menu__top">
          <a href="/" aria-label="Home" className="menu__home-link">
            <Logo className="menu__logo" />
          </a>

          <button className="menu__close close-menu" aria-label="Close menu">
            <svg viewBox="0 0 16 16">
              <path
                d="M 1 1 L 15 15 M 1 15 L 15 1"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="currentColor"
                aria-hidden="true"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </button>
        </div>
        <div className="menu__search-input-wrapper">
          <div className="container">
            <input
              type="search"
              className="menu__search-input"
              placeholder="Search"
            />
          </div>
        </div>
        <MenuNav className="container" />
        <div className="menu__results"></div>
      </div>
    </dialog>
  );
};

export default Menu;
