import React from 'react';
import './Hero.css'

const hero = () => {
    return (
        <div className="py-5 my-4">
            <p className="mono-text mono-color">Hi, my name is</p>
            <h1 className="title-name">Abu Hasan Rumi.</h1>
            <h1 className="hero-subtitle text-white-50">I build things for the web.</h1>
            <ul className="hero-list mono-color d-flex pl-4">
                <li className="mr-5">Web Developer</li>
                <li>Programmer</li>
            </ul>
            <p className="hero-text text-white-50 py-3 mono-text">I'm a front-end developer based in Feni, Bangladesh specializing <br className="d-none d-md-block" />in building (and occasionally designing) exceptional websites<br className="d-none d-md-block" /> with latest technologies.</p>

            <div className="hero-buttons mono-text">
                <a target="_blank" rel="noopener noreferrer" className="btn hero-btn about-btn py-2 px-3 mr-2 py-md-3 px-md-4 mr-md-4" href="https://drive.google.com/uc?export=download&id=19cC7fJPgr9NzytnZe0A2FvivrAFCWw5z">Download Resume</a>
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-4" href="/contact">Get In Touch</a>
            </div>
        </div>
    );
};

export default hero;