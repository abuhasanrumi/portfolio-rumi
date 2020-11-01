import React from 'react';
import './ProjectsPage.css'
import project1 from '../../images/creative-agency.png'
import project2 from '../../images/volunteer-assignment.png'
import project3 from '../../images/travel-buddy.png'
import project4 from '../../images/raybim.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage = () => {
    return (
        <div>
            <div className="project-section-padding">
                <h2 className="projects-title mb-4"><span className="mono-text mono-color">Noteworthy Projects</span></h2>
                <div className="projects">
                    <div className="row ">
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://creative-agency4.web.app/">
                                <img className="card-img-top" src={project1} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Creative Agency</h5>
                                    <small className="card-text blog-description text-white-50">
                                        <ul className="ml-3">
                                            <li className="py-1">A single page website with fully responsive and interactive UI</li>
                                            <li className="py-1">Customer can order service, check order status and write review</li>
                                            <li className="py-1">Admin can add services and change order statuses with an overview of all orders</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item">JavaScript</li>
                                            <li className="skill-item">React.js</li>
                                            <li className="skill-item">Node.js</li>
                                            <li className="skill-item">Express.js</li>
                                            <li className="skill-item">MongoDB</li>
                                            <li className="skill-item">Firebase</li>
                                            <li className="skill-item">Bootstrap</li>
                                        </ul>
                                    </small>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text">
                                        <a href="https://github.com/abuhasanrumi/creative-agency-client"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://github.com/abuhasanrumi/creative-agency-server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://creative-agency4.web.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://volunteer-network1.netlify.app/">
                                <img className="card-img-top" src={project2} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Volunteer Network</h5>
                                    <small className="card-text blog-description text-white-50">
                                        <ul className="ml-3">
                                            <li className="py-1">A single page web application for non-profit organizations.</li>
                                            <li className="py-1">Volunteers can register for new events on their desired date.</li>
                                            <li className="py-1">Admin can add or delete events, modify the volunteer list.</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item">React.js</li>
                                            <li className="skill-item">Node.js</li>
                                            <li className="skill-item">Express.js</li>
                                            <li className="skill-item">MongoDB</li>
                                            <li className="skill-item">Firebase</li>
                                            <li className="skill-item">Bootstrap4</li>
                                        </ul>
                                    </small>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text">
                                        <a href="https://github.com/abuhasanrumi/volunteer-network"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://github.com/abuhasanrumi/volunteer-network-server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://volunteer-network1.netlify.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://travel-guru-rumi.netlify.app/">
                                <img className="card-img-top" src={project3} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Travel Guru</h5>
                                    <small className="card-text blog-description text-white-50">
                                        <ul className="ml-3">
                                            <li className="py-1">A single page website to book hotel room depending on location</li>
                                            <li className="py-1">Authenticated users can choose a place.</li>
                                            <li className="py-1">User can book room by providing dates.</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item">React.js</li>
                                            <li className="skill-item">Node.js</li>
                                            <li className="skill-item">Express.js</li>
                                            <li className="skill-item">MongoDB</li>
                                            <li className="skill-item">Firebase</li>
                                            <li className="skill-item">Bootstrap4</li>
                                        </ul>
                                    </small>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text">
                                        <a href="https://github.com/abuhasanrumi/travel-guru"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://travel-guru-rumi.netlify.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://abuhasanrumi.github.io/RayBim-New/">
                                <img className="card-img-top" src={project4} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">RayBim Technologies</h5>
                                    <small className="card-text blog-description text-white-50">
                                        <ul className="ml-3">
                                            <li className="py-1">A fully responsive agency website built from scratch.</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item">Bootstrap4</li>
                                            <li className="skill-item">HTML5</li>
                                            <li className="skill-item">CSS3</li>
                                        </ul>
                                    </small>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text">
                                        <a href="https://github.com/abuhasanrumi/RayBim-New"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://abuhasanrumi.github.io/RayBim-New/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsPage;