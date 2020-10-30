import React from 'react';
import './About.css'
import rumi from '../../images/rumi.jpg'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className="section-padding">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="mono-text mono-color">Hello!</h3><br />
                        <p className="text-light about-text">
                            I'm Rumi, a frontend developer based in Feni, Bangladesh. <br /><br />

                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.<br /><br />

                        Here are a few technologies I've been working with recently:
                    </p>
                        <ul className="project-skills text-light py-2">
                            <li className="skill-item">React.js</li>
                            <li className="skill-item">Node.js</li>
                            <li className="skill-item">Express.js</li>
                            <li className="skill-item">MongoDB</li>
                            <li className="skill-item">Firebase</li>
                            <li className="skill-item">Bootstrap4</li>
                            <li className="skill-item">HTML5</li>
                            <li className="skill-item">CSS3</li>
                            <li className="skill-item">Material UI</li>
                            <li className="skill-item">REST API</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="wrapper m-auto">
                            <img className="img-fluid about-img" src={rumi} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default About;