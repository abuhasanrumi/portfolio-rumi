import React from 'react';
import './ProjectsPage.css'
import project1 from '../../images/creative-agency.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const ProjectsPage = () => {
    return (
        <div>
            <div className="project-section-padding">
                <h2 className="projects-title mb-4"><span className="mono-text mono-color">Noteworthy Projects</span></h2>
                <div className="projects">
                    <div className="row ">
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4">
                            <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
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
                                        <a href="#"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
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