import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="text-center">
            <p className="mono-text mono-color">What's Next?</p>
            <h3 className="contact-title text-light">Get In Touch</h3>
            <p className="contact-description text-white-50 my-4">I am always open to hear from you. Whether you have a question <br className="d-none d-md-block" />or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <div className="project-btn text-center">
                <a className="btn hero-btn touch-btn my-5 py-2 px-3 py-md-3 px-md-5 mono-text" href="#">Get In Touch</a>
            </div>

            <div className="footer mt-5 pt-5 text-center text-white-50 mono-text ">

                <a className="footer-name text-white-50" href="#"><FontAwesomeIcon icon={faGithub} /><br /><small>Built by Abu Hasan Rumi</small></a>
            </div>

        </div>
    );
};

export default Contact;