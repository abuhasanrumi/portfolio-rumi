import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({ title, link, linkText }) => {
    return (
        <div className="section-title d-flex align-items-center">
            <h2 className="m-0"><span className="mono-color">Some of </span><span className="text-light">{title}</span></h2>
            <div className="section-line d-none d-lg-block w-50"></div>
            <div className="right-section d-none d-sm-block">
                <a className="section-title-btn mono-text mono-color btn" href={link}><small>{linkText}</small></a>
            </div>
        </div>
    );
};

export default SectionTitle;