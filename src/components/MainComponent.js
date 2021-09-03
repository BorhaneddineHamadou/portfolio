import React from 'react';
import Header from './HeaderComponent';
import Navbar from './NavbarComponent';
import Particles from 'react-particles-js';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Portfolio from './PortfolioComponent';
import Certifications from './CertificationsComponent';
import Logo from './LogoComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import Footer from './FooterComponent';


const Main = (props) => { 

    return (
        <>
           <Particles className="particles-canvas" params={{
             particles: {
                 number: {
                   value: 30,
                   density: {
                     enable:true,
                     value_area: 900
                   }
                 },
                 shape:{
                   type: 'circle',
                   stroke: {
                     width: 6,
                     color: "#05F6E7"
                   }
                 }
             }
           }} />
           <Navbar />
           <Header />
           <About />
           <Skills />
           <Logo />
           <Portfolio />
           <Certifications />
           <Contact />
           <Footer />
        </>
      );
}

export default Main;
