/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Projects.css'
import creativeAgency from '../../../images/creative-agency.png'
import volunteer from '../../../images/volunteer-assignment.png'
import travel from '../../../images/travel-buddy.png'
import raybim from '../../../images/raybim.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const Project = () => {

    return (
        <div>
            <SectionTitle title={"My Projects"} link={"/projects"} linkText={"All Projects"}></SectionTitle>
            <div className="projects py-5">
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <div className="project-img">
                                <a href="https://creative-agency4.web.app/"><img className="img-fluid" src={creativeAgency} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">Creative Agency</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A fully interactive and responsive web application built with MERN stack technologies. Some of it's key features are ordering service, adding service, dashboard and writing review. It has admin and user role.
                            </p>
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                    <li className="skill-item">Express.js</li>
                                    <li className="skill-item">MongoDB</li>
                                    <li className="skill-item">Firebase</li>
                                    <li className="skill-item">Bootstrap4</li>
                                    <li className="skill-item">HTML5</li>
                                    <li className="skill-item">CSS3</li>
                                    <li className="skill-item">REST Api</li>
                                    <li className="skill-item">CRUD</li>
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="https://github.com/abuhasanrumi/creative-agency-client" target="_blank"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://github.com/abuhasanrumi/creative-agency-server" target="_blank"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://creative-agency4.web.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 order-md-2">
                            <div className="project-img">
                                <a href="https://volunteer-network1.netlify.app/"><img className="img-fluid" src={volunteer} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <div className="left-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">Volunteer Network</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A fully interactive web application built for non-profit organizations with latest MERN stack technologies. Some of it's key features are adding events, registering for events, cancelling registrations.
                            </p>
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                    <li className="skill-item">Express.js</li>
                                    <li className="skill-item">MongoDB</li>
                                    <li className="skill-item">Firebase</li>
                                    <li className="skill-item">Bootstrap4</li>
                                    <li className="skill-item">HTML5</li>
                                    <li className="skill-item">CSS3</li>
                                    <li className="skill-item">REST Api</li>
                                    <li className="skill-item">CRUD</li>
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="https://github.com/abuhasanrumi/volunteer-network" target="_blank"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://github.com/abuhasanrumi/volunteer-network-server" target="_blank"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://volunteer-network1.netlify.app/" target="_blank"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <div className="project-img">
                                <a href="https://travel-guru-rumi.netlify.app/"><img className="img-fluid" src={travel} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">Travel Guru</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A hotel booking website based on the place you want to visit. The system will recommend available hotels near your travel destination. And you can book rooms them depending on your requirements.
                            </p>
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                    <li className="skill-item">MongoDB</li>
                                    <li className="skill-item">Firebase</li>
                                    <li className="skill-item">Bootstrap4</li>
                                    <li className="skill-item">HTML5</li>
                                    <li className="skill-item">CSS3</li>
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="https://github.com/abuhasanrumi/travel-guru" target="_blank"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://travel-guru-rumi.netlify.app/" target="_blank"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 order-md-2">
                            <div className="project-img">
                                <a href="https://abuhasanrumi.github.io/RayBim-New/"><img className="img-fluid" src={raybim} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <div className="left-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">RayBim Technologies</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A fully responsive multi-page website built with HTML, CSS and BootStrap.
                            </p>
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">Bootstrap4</li>
                                    <li className="skill-item">HTML5</li>
                                    <li className="skill-item">CSS3</li>
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="https://github.com/abuhasanrumi/RayBim-New" target="_blank"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://abuhasanrumi.github.io/RayBim-New/" target="_blank"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-btn text-center">
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-5 mono-text" href="/projects">See More</a>
            </div>
        </div>
    );
};

export default Project;