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
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre 
                        provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte 
                        dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en 
                        faux latin, le Lorem ipsum ou Lipsum.
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre 
                        provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte 
                        dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en 
                        faux latin, le Lorem ipsum ou Lipsum.
                        </p>
                    </div> 
                </div>
            </div>
        </div>
      </div>
  );
}

export default About;