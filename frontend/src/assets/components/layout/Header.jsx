import useScroll from '../../hooks/useScroll';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio', id: 'home' },
  { label: 'Sobre mí', href: '#sobre-mi', id: 'about' },
  { label: 'Book', href: '#book', id: 'gallery' },
  { label: 'Proyectos', href: '#proyectos', id: 'projects' },
  { label: 'Contacto', href: '#contacto', id: 'contact' },
];

const Header = () => {
  const scroll = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => setIsMenuOpen(false);

  return (
    <header className={`header ${scroll ? 'header--scrolled' : ''}`}>
      <h1 className={`header__logo ${scroll ? 'header__logo--scrolled' : ''} `}>
        PAOLA GARCIA
      </h1>
      <button
        className={`header__hamburger ${scroll ? 'header__hamburger--scrolled' : ''}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <MdClose /> : <RxHamburgerMenu />}
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => {
          return (
            <a
              className={`header__nav-item ${scroll ? 'header__nav-item--scrolled' : ''}`}
              key={link.id}
              href={link.href}
              onClick={handleClose}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
