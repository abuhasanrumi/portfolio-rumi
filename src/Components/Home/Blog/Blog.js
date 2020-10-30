import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Blog.css'
import blog1 from '../../../images/blog1.png'

const Blog = () => {
    return (
        <div>
            <SectionTitle title={"My Articles"} link={"/blog"} linkText={"All Articles"}></SectionTitle>
            <div className="blogs py-5">
                <div className="row ">
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
                            <img className="card-img-top" src={blog1} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">Webpack for Beginner’s</h5>
                                <small className="card-text blog-description text-white-50">Webpack is the latest and greatest in front-end development tools. As a beginner to Webpack, this is what I have learned.
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                </ul>
                                <div className="date text-light mono-text"><small>January 1st, 2020</small></div>
                            </div>
                        </a>
                    </div>
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
                            <img className="card-img-top" src={blog1} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">Webpack for Beginner’s</h5>
                                <small className="card-text blog-description text-white-50">Webpack is the latest and greatest in front-end development tools. As a beginner to Webpack, this is what I have learned.
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                </ul>
                                <div className="date text-light mono-text"><small>January 1st, 2020</small></div>
                            </div>
                        </a>
                    </div>
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
                            <img className="card-img-top" src={blog1} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">Webpack for Beginner’s</h5>
                                <small className="card-text blog-description text-white-50">Webpack is the latest and greatest in front-end development tools. As a beginner to Webpack, this is what I have learned.
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                    <li className="skill-item">Node.js</li>
                                </ul>
                                <div className="date text-light mono-text"><small>January 1st, 2020</small></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="blog-btn text-center">
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-5 mono-text" href="#">See More</a>
            </div>
        </div>
    );
};

export default Blog;