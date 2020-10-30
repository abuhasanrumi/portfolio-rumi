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
                                <a href="#"><img className="img-fluid" src={creativeAgency} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">OctoProfile</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.
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
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="#"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 order-md-2">
                            <div className="project-img">
                                <a href="#"><img className="img-fluid" src={volunteer} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <div className="left-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">OctoProfile</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.
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
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="#"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <div className="project-img">
                                <a href="#"><img className="img-fluid" src={travel} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">OctoProfile</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.
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
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="#"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-project my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 order-md-2">
                            <div className="project-img">
                                <a href="#"><img className="img-fluid" src={raybim} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <div className="left-project-text py-4 px-3">
                                <p className="mono-color mono-text">Featured Project</p>
                                <h3 className="text-white project-title">OctoProfile</h3>
                                <p className="project-description m-0 py-1 text-white-50 mono-text">
                                    A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.
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
                                </ul>
                                <div className="project-links mono-text">
                                    <a href="#"><small>Client-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Server-side: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="#"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-btn text-center">
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-5 mono-text" href="#">See More</a>
            </div>
        </div>
    );
};

export default Project;