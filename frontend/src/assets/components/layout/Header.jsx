import useScroll from '../../hooks/useScroll';
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

  return (
    <header className={`header ${scroll ? 'header--scrolled' : ''}`}>
      <h1 className={`header__logo ${scroll ? 'header__logo--scrolled' : ''} `}>
        PAOLA GARCIA
      </h1>
      <nav className="header__nav">
        {navLinks.map((link) => {
          return (
            <a
              className={`header__nav-item ${scroll ? 'header__nav-item--scrolled' : ''}`}
              key={link.id}
              href={link.href}
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
