import { useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MenuIcon } from '../icons/MenuIcon';
import { CloseIcon } from '../icons/CloseIcon';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.container}>
          <button
            className={styles.logo}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            JW
          </button>

          <ul className={styles.links} role="list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className={styles.mobile} role="dialog" aria-label="Mobile navigation">
            <ul role="list">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`${styles.mobileLink} ${activeId === id ? styles.active : ''}`}
                    onClick={() => scrollTo(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
