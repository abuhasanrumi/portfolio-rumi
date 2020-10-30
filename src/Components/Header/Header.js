/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div collapse="text-white">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink exact activeClassName="active" to="/" className="navbar-brand nav-logo">R</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mono-text">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/home" className="nav-link navigation-item px-3">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/about" className="nav-link navigation-item px-3">About<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/projects" className="nav-link navigation-item px-3" >Projects<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/blog" className="nav-link navigation-item px-3" >Blog<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/contact" className="nav-link navigation-item px-3 pr-md-4" >Contact<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" className="nav-link navigation-item resume px-3 mt-2 mt-md-0 d-inline-block" href="https://drive.google.com/file/d/1JoEhI-zfcg_Qr4BKUTveHmlPvkzNoXlb/view?usp=sharing">Resume<span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;