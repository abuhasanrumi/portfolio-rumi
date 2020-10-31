import React from 'react';
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'

const BlogPage = () => {
    return (
        <div>
            <div className="project-section-padding">
                <h2 className="projects-title mb-4"><span className="mono-text mono-color">Blogposts</span></h2>
                <div className="row ">
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/zenofai/beginners-guide-to-reactjs-3ca07f56d526">
                            <img className="card-img-top" src={blog1} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">Beginners Guide to ReactJS</h5>
                                <small className="card-text blog-description text-white-50">In this piece, we'll understand what React is, how it works, and why it's used. We'll also build our first React application.
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">React.js</li>
                                </ul>
                                <div className="date text-light mono-text"><small>May 12, 2019</small></div>
                            </div>
                        </a>
                    </div>
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1">
                            <img className="card-img-top" src={blog2} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">Understanding Node.js</h5>
                                <small className="card-text blog-description text-white-50">With this understanding, we could describe Node.js as a unique tool that combines JavaScript and C++ to run programs outside of the browser ...
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">Node.js</li>
                                </ul>
                                <div className="date text-light mono-text"><small>July 29, 2020</small></div>
                            </div>
                        </a>
                    </div>
                    <div className="card my-4 single-blog col-md-6 col-lg-4">
                        <a target="_blank" className="text-white" href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460">
                            <img className="card-img-top" src={blog3} alt="Card image cap" />
                            <div className="card-body blog-text">
                                <h5 className="card-title blog-title">What is REST</h5>
                                <small className="card-text blog-description text-white-50">Webpack is the latest and greatest in front-end development tools. As a beginner to Webpack, this is what I have learned.
                            </small>
                            </div>
                            <div className="card-footer blog-footer d-flex">
                                <ul className="project-skills text-white-50 py-2">
                                    <li className="skill-item">REST Api</li>
                                </ul>
                                <div className="date text-light mono-text"><small>January 1st, 2020</small></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;