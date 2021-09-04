import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenNib, faFileCode, faMobile, faBrain} from '@fortawesome/free-solid-svg-icons';

const RenderSkill = ({icon, skillTitle, description}) => {
    return(
       <div className="skill-card col-9 col-sm-5 col-lg m-3">
           <div className="skill-icon-container mb-3">
              <FontAwesomeIcon icon={icon} className="skill-icon" />
           </div>
           <h4 className="mb-3">{skillTitle}</h4>
           <p>{description}</p>  
       </div>
    )
}

const Skills = (props) => {
    return(
       <div className="skills-container" id="skills"> 
            <div className="container">
                <div className="row mb-5">
                    <h1>My Skills</h1>
                </div>
                <div className="row skill-cards-container">
                    <RenderSkill icon={faPenNib} skillTitle="Ui Design" 
                    description="Create professional Ui designs for Web | Mobile | Desktop applications" />
                    <RenderSkill icon={faFileCode} skillTitle="Web Development" 
                    description="Build user-friendly Web Applications with React.js, bootstrap and many modern Libraries" />
                    <RenderSkill icon={faMobile} skillTitle="Mobile Development" 
                    description="Developing beautiful cross-platform mobile applications with react-native" />
                    <RenderSkill icon={faBrain} skillTitle="Machine Learning" 
                    description="Honestly, I'm currently learning about Machine Learning and Data Science. Future Data Scientist :')" />
                </div>
        </div>
       </div> 
    );
}

export default Skills;