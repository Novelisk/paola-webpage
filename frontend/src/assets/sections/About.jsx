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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          dolor! Accusamus cupiditate tempora quia, tenetur nesciunt, repellat
          distinctio, minima incidunt ea quibusdam nihil nobis corrupti nostrum
          recusandae excepturi pariatur iste.
        </p>
        <p className="about-content__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          dolor! Accusamus cupiditate tempora quia, tenetur nesciunt, repellat
          distinctio, minima incidunt ea quibusdam nihil nobis corrupti nostrum
          recusandae excepturi pariatur iste.
        </p>
        <p className="about-content__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          dolor! Accusamus cupiditate tempora quia, tenetur nesciunt, repellat
          distinctio, minima incidunt ea quibusdam nihil nobis corrupti nostrum
          recusandae excepturi pariatur iste.
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
