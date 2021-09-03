import React from 'react';
//React Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const anchorClicked = (event) => {
    document.querySelector(".navbar-nav li a.active").classList.remove("active");
    event.target.classList.add('active');
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" sticky="top">
            <div className="container">
                <a className="navbar-brand" href="#"> <img className="logo" src="assets/images/full_logo.svg" alt="Borhaneddine Logo" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" onClick={anchorClicked} href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={anchorClicked} href="#aboutme">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={anchorClicked} href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={anchorClicked} href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={anchorClicked} href="#certifications">Certifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={anchorClicked} href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
