import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Project from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <section className="hero-area">
                <Hero></Hero>
            </section>

            <section className="project-area section-padding">
                <Project></Project>
            </section>

            <section className="blog-area section-padding">
                <Blog></Blog>
            </section>

            <section className="contact-area section-padding">
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;