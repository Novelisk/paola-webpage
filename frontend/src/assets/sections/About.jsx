import { GiOldMicrophone, GiDirectorChair } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { FiTv } from 'react-icons/fi';
import './About.css';

const achvievements = [
  {
    id: 1,
    icon: GiOldMicrophone,
    label: 'Años de experiencia',
    value: '10+ años en la industria del doblaje y actuación',
  },
  {
    id: 2,
    icon: GiDirectorChair,
    label: 'Series/animés dirigidos',
    value: '10+ series dirigidas y 10+ animés dirigidos',
  },
  {
    id: 3,
    icon: BiCameraMovie,
    label: 'Series dobladas',
    value: '20+ personajes en series de televisión',
  },
  {
    id: 4,
    icon: FiTv,
    label: 'Animés doblados',
    value: '20+ personajes en animés para televisión y cine',
  },
];

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <img
        src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Paola Garcia actress portrait"
        className="about__image"
      />
      <div className="about-content">
        <h3 className="about-content__title">Sobre mi...</h3>

        <p className="about-content__description">
          Mi camino profesional empezó entre consolas y partituras. Me formé
          como Ingeniera en Producción Musical y realicé una maestría en Music
          Business, una base que me dio la precisión técnica y el entendimiento
          estratégico que hoy aplico en cada proyecto. Sin embargo, siempre
          sentí que mi verdadera voz estaba esperando ser descubierta, lo que me
          llevó a dar un giro vital hacia mi verdadera pasión: la
          interpretación.
        </p>
        <p className="about-content__description">
          Tras sumergirme en un entrenamiento intensivo de <i> voice dubbing</i>
          , encontré en el doblaje el punto exacto donde mi oído musical y mi
          capacidad expresiva se encuentran. Ese cambio de rumbo no fue un
          borrón y cuenta nueva, sino una evolución; hoy utilizo toda mi
          formación previa para entender el ritmo, el tono y la intención que
          cada personaje y cada escena requieren.
        </p>
        <p className="about-content__description">
          Actualmente, me desempeño con total entrega como actriz y directora de
          doblaje. Mi misión es dar vida a historias con autenticidad, cuidando
          cada detalle técnico desde el atril hasta la dirección de sala. Me
          apasiona el poder transformador de la voz y cómo, a través de ella,
          podemos conectar emociones y cruzar fronteras. ¡Bienvenidos a mi
          espacio!
        </p>

        <div className="about-content__achievements">
          {achvievements.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="about__achievement">
                <Icon size={32} />
                <div className="about__achievement-text">
                  <h4 className="about__achievement-title">{item.label}</h4>
                  <p className="about__achievement-description">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
