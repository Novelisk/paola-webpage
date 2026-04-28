import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, socialLinks } from '../data/contactData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then((res) => {
        console.log('SUCCESS!', res.status, res.text);
        setStatus({ success: true, message: 'Mensaje enviado correctamente.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('ERROR!', err.text);
        setStatus({ success: false, message: 'Error al enviar el mensaje.' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-header">
        <h2 className="contact-header__title">Contacto</h2>
        <p className="contact-header__description">
          ¿Quieres ponerte en contacto conmigo? Llena el formulario y te
          responderé lo antes posible.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-content__left">
          <div className="contact-content__info">
            <div className="contact__info-header">
              <h3 className="contact__info-title">Información de Contacto</h3>
              <p className="contact__info-description">
                Puedes contactarme a través de los siguientes medios:
              </p>
            </div>

            <div className="contact__info-container">
              {contactInfo.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div key={item.id} className="contact__info-item">
                    <ItemIcon size={24} className="contact__info-icon" />
                    <div className="contact__info-text-container">
                      <h4 className="contact__info-label">{item.label}</h4>
                      <p className="contact__info-text">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-content__social">
            <div className="contact__social-header">
              <h3 className="contact__social-title">
                Sígueme en las redes sociales
              </h3>
              <p className="contact__social-description">
                También puedes encontrarme en las siguientes plataformas:
              </p>
            </div>

            <div className="contact__social-links">
              {socialLinks.map((link) => {
                const LinkIcon = link.icon;

                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                  >
                    <LinkIcon size={24} className="contact__social-icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <form className="contact-content__form" onSubmit={handleSubmit}>
          <div className="contact__form-header">
            <h3 className="contact__form-title">Envíame un Mensaje</h3>
            <p className="contact__form-description">
              Si tienes alguna pregunta o quieres colaborar, no dudes en
              enviarme un mensaje.
            </p>
          </div>

          <div className="contact-form-group">
            {/* <label htmlFor="name" className="contact-form-label">
              Nombre
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="contact-form-input"
              required
            />
          </div>

          <div className="contact-form-group">
            {/* <label htmlFor="email" className="contact-form-label">
              Correo Electrónico
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              className="contact-form-input"
              required
            />
          </div>

          <div className="contact-form-group">
            {/* <label htmlFor="subject" className="contact-form-label">
              Asunto
            </label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact-form-input"
              placeholder="Asunto del mensaje"
              required
            />
          </div>

          <div className="contact-form-group">
            {/* <label htmlFor="message" className="contact-form-label">
              Mensaje
            </label> */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-form-textarea"
              rows={5}
              required
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="contact-form-button"
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {status && (
            <p
              className={`contact-form-status ${status.success ? 'success' : 'error'}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
