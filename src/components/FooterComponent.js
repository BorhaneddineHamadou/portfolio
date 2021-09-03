import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faMapMarkerAlt, faEnvelope, fa} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <div className="footer-wraper">
            <div className="container">
                <div className="row text-light mb-5">
                    <div className="col-md-4">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "FFF"}} />&nbsp; City Zaouia el-Abidia, Touggourt, Algeria</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} style={{color: "FFF"}} />&nbsp; (+213) 658 64 27 32</p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={{color: "FFF"}} />&nbsp; kb_hamadou@esi.dz</p>
                    </div>
                    <div className="col-6 col-md-2">
                        <p><a href="#home">HOME</a></p>
                        <p><a href="#aboutme">ABOUT ME</a></p>
                        <p><a href="#skills">SKILLS</a></p>
                    </div>
                    <div className="col-6 col-md-2">
                        <p><a href="#portfolio">PORTFOLIO</a></p>
                        <p><a href="#certifications">CERTIFICATIONS</a></p>
                        <p><a href="#contact">CONTACT</a></p>
                    </div>
                    <div className="col-md-4">
                        <a className="btn btn-social-icon btn-google me-4" href="#">
                            <i className="fa fa-google fa-lg" style={{color: "#FFF"}}></i>
                        </a>
                        <a className="btn btn-social-icon btn-linkedin me-4" href="#">
                            <i className="fa fa-linkedin fa-lg" style={{color: "#FFF"}}></i>
                        </a>
                        <a className="btn btn-social-icon btn-github" href="#">
                            <i className="fa fa-github fa-lg" style={{color: "#FFF"}}></i>
                        </a>
                    </div>
                </div>
                <div className="row text-light text-center fs-6 font-weight-light">
                    <span>COPYRIGHT &#9400; 2021 BORHANEDDINE HAMADOU | ALL RIGHTS RESERVED </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;