import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © 2026 Paola García. Todos los derechos reservados.
      </p>
      <p className="footer__text">
        Creado por{' '}
        <a
          href="https://novelisk.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          NOVELISK
        </a>
      </p>
    </footer>
  );
};

export default Footer;
