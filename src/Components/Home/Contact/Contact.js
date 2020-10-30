import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="text-center">
            <p className="mono-text mono-color">What's Next?</p>
            <h3 className="contact-title text-light">Get In Touch</h3>
            <p className="contact-description text-white-50 my-4">I am always open to hear from you. Whether you have a question <br className="d-none d-md-block" />or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <div className="project-btn text-center my-5">
                <a target="_blank" className="btn hero-btn about-btn py-2 px-3 mr-2 py-md-3 px-md-4 mr-md-4" href="https://drive.google.com/file/d/1JoEhI-zfcg_Qr4BKUTveHmlPvkzNoXlb/view?usp=sharing">Download Resume</a>
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-4" href="/contact">Get In Touch</a>
            </div>



        </div>
    );
};

export default Contact;