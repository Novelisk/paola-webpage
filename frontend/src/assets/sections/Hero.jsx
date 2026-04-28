import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <img
        src="https://imagerenderer.com/images/images-profile-flow/400/images-medium-large-5/young-beautiful-woman-coffeeandmilk.jpg"
        alt="Actress portrait"
        className="hero__image"
      />
      <div className="hero__content">
        <h2 className="hero__title">Paola García</h2>
        <p className="hero__tagline">Actriz & Directora de Doblaje</p>
        <div className="hero__cta">
          <a href="#contacto" className="hero__cta-item">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
