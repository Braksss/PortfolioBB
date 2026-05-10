import React, { useState } from 'react';
import './styles/contactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    soloEntrepreneur: false,
    companyRepresentative: false,
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs vides
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.profession.trim()) newErrors.profession = 'Le rôle est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'adresse email est requise';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Envoi des données si tout est valide
    setErrors({});
    fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        profession: formData.profession,
        email: formData.email,
        message: formData.message,
        soloEntrepreneur: formData.soloEntrepreneur,
        companyRepresentative: formData.companyRepresentative,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'success') {
          alert('Email envoyé avec succès !');
          setFormData({
            firstName: '',
            lastName: '',
            profession: '',
            email: '',
            soloEntrepreneur: false,
            companyRepresentative: false,
            message: '',
          });
        } else {
          alert('Échec de l\'envoi de l\'email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Une erreur est survenue.');
      });
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">DISCUTONS DE VOTRE PROJET</h2>
      <p className="contact-form__subtitle">
        Je suis disponible pour répondre à toutes vos questions et discuter de vos besoins.
      </p>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__inputs">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Prénom"
            className="contact-form__input"
          />
          {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Nom"
            className="contact-form__input"
          />
          {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
        </div>

        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          placeholder="Votre rôle (ex. CTO, Chef de projet)"
          className="contact-form__input"
        />
        {errors.profession && <span className="contact-form__error">{errors.profession}</span>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Adresse Email"
          className="contact-form__input"
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}

        <div className="contact-form__buttons">
          <button
            type="button"
            className={`contact-form__button ${formData.soloEntrepreneur ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, soloEntrepreneur: true, companyRepresentative: false })}
          >
            <span className="contact-form__icon">🧑‍💼</span>
            Je suis freelance ou entrepreneur
          </button>

          <button
            type="button"
            className={`contact-form__button ${formData.companyRepresentative ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, companyRepresentative: true, soloEntrepreneur: false })}
          >
            <span className="contact-form__icon">🏢</span>
            Je représente une entreprise
          </button>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Dites-moi en plus sur votre projet ou vos besoins"
          className="contact-form__textarea"
        ></textarea>
        {errors.message && <span className="contact-form__error">{errors.message}</span>}

        <button type="submit" className="contact-form__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
