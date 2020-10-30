/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div collapse="text-white">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand nav-logo" href="#">R</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mono-text">
                        <li className="nav-item">
                            <a className="nav-link navigation-item px-3" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navigation-item px-3" href="#">About<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navigation-item px-3" href="#">Projects<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navigation-item px-3" href="#">Blog<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navigation-item px-3 pr-md-4" href="#">Contact<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navigation-item resume px-3 mt-2 mt-md-0 d-inline-block" href="#">Resume<span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;