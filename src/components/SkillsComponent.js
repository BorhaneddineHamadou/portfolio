import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenNib, faFileCode, faMobile, faBrain} from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RenderSkill = ({icon, skillTitle, description, aos, aos_offset}) => {

    return(
       <div data-aos={aos} data-aos-offset={aos_offset} className="skill-card col-9 col-sm-5 col-lg m-3">
           <div className="skill-icon-container mb-3">
              <FontAwesomeIcon icon={icon} className="skill-icon" />
           </div>
           <h4 className="mb-3">{skillTitle}</h4>
           <p>{description}</p>  
       </div>
    )
}

class Skills extends Component {

    componentDidMount(){
        Aos.init();
    }

    render(){
        return(
            <div className="skills-container" id="skills"> 
                 <div className="container">
                     <div className="row mb-5">
                         <h1>My Skills</h1>
                     </div>
                     <div className="row skill-cards-container">
                         <RenderSkill aos="zoom-out-down" aos_offset="100" icon={faPenNib} skillTitle="Ui Design" key="1" 
                         description="Create professional Ui designs for Web | Mobile | Desktop applications" />
                         <RenderSkill aos="zoom-in" aos_offset="100" icon={faFileCode} skillTitle="Web Development" key="2" 
                         description="Build user-friendly Web Applications with React.js, bootstrap and many modern Libraries" />
                         <RenderSkill aos="fade-up" aos_offset="100" icon={faMobile} skillTitle="Mobile Development" key="3" 
                         description="Developing beautiful cross-platform mobile applications with react-native" />
                         <RenderSkill aos="fade-down" aos_offset="100" icon={faBrain} skillTitle="Machine Learning" key="4"
                         description="Honestly, I'm currently learning about Machine Learning and Data Science. Future Data Scientist :')" />
                     </div>
             </div>
            </div> 
         );
    }
}

export default Skills;