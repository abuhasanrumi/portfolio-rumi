import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div className="footer my-5 text-center text-white-50 mono-text ">


            <a className="footer-name text-white-50" href="#"><FontAwesomeIcon icon={faGithub} /><br /></a>

            <a className="footer-name text-white-50" href="#"><small>Designed by Brittany Chiang &amp; Solaiman Shadin</small></a><br />
            <a className="footer-name text-white-50" href="#"><small>Customized &amp; Built by Abu Hasan Rumi</small></a>
        </div>
    );
};

export default Footer;