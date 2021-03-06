import React from 'react';
import '@styles/Contact.css'

const Contact = () => {
    return (
        <section className="all-contact-container">
            <form action="#/contact" className="contact-contain">
                <h1 className="title-contact">Te contactamos</h1>
                <input type="text" className="name-contact" />
                <input type="tel" className="number-contact" />
                <input type="email" className="email-contact" />
                <textarea className="message-contact"></textarea>
                <input type="submit" className="btn-enviar" name="btn-enviar" id="btn-enviar" value="Enviar" />
            </form>
        </section>
    );
}

export default Contact;