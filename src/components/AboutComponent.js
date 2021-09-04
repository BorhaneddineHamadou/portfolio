import React from 'react';

function About(props) {
  return(
      <div className="about-container" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="avatar-container">
                        <img src="assets/images/avatar.jpg" className="avatar" />
                    </div>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                    <div className="about-text-container">
                        <h1>About Me</h1> 
                        <p>
                            Hey there ! <br/>
                            I'am <strong>Borhaneddine HAMADOU</strong>, fourth year student at the Higher National College of Computer Sciences of Algiers 
                            (ESI ex.INI). I'm passionate about mathematics, programming, coding and problem solving. On the professional side, 
                            I'm <strong>Web/Mobile Applications developer</strong> for more than 3 years, and I've worked on a lot of projects since that time. 
                            Also, I have a solid knowledge in <strong>Ui design</strong>, and I contributed in some projects as a Ui Designer. As well, I have 
                            advanced knowledge in <strong>React.js</strong> and <strong>React Native</strong> and many JS labraries.
                            Currently, I am studying about <strong>Machine Learning</strong> and <strong>Data Science</strong> and I would like to direct my graduation project 
                            and my career to this field.<br />
                            Finally, thank you for being here, I'm always available and you can <a className="text-danger" href="#contact">contact me</a> any time.
                            <br /><br /> I wish you all the success !

                        </p>
                    </div> 
                </div>
            </div>
        </div>
      </div>
  );
}

export default About;