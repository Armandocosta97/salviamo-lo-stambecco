import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const petitionUrl = 'https://tally.so/r/ob5NjO';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/comuni', label: 'Comuni aderenti' },
  { to: '/aderisci-comune', label: 'Aderisci come Comune' },
  { to: '/articoli', label: 'Articoli' },
  { to: '/agisci', label: 'Agisci ora' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" to="/">
            Salviamo lo Stambecco
          </Link>

          <nav className="nav-desktop" aria-label="Navigazione principale">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a href={petitionUrl} className="cta-button" target="_blank" rel="noreferrer">
              Firma l&apos;appello
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? 'Chiudi' : 'Menu'}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-panel${isOpen ? ' open' : ''}`}>
          <nav className="nav-mobile" aria-label="Navigazione mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={petitionUrl}
              className="cta-button"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Firma l&apos;appello
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
