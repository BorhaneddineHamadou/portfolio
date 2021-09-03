import React from 'react';

const RenderImage = ({image, title, logo}) =>{
  return(
      <div className="portfolio-image-container col-9 col-sm-5 col-lg m-3">
          <div className="h6 align-items-center">
             <img src={logo} width="100px" />
             <h6>{title}</h6>
          </div>
          <img src={image} alt={title} width="100%" height="185px" />
      </div>
  );
}

const Portfolio = (props) => {
  return(
    <div className="portfolio-container" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="row mb-5">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className="row p-container">
                <RenderImage image="assets/images/somu.png" title="SomuAgency Website" logo="assets/images/logo_somu.png" />
                <RenderImage image="assets/images/ahmedsellami.png" title="Ahmed Sellami Website" logo="assets/images/logo_ahmed.png" />  
                <RenderImage image="assets/images/imtyaz.png" title="Imtyaz Android App" logo="assets/images/logo_imtyaz.png"/> 
                <RenderImage image="assets/images/souqziwa.jpg" title="Souq Ziwa Android App" logo="assets/images/logo_ziwa.png"/> 
            </div>
        </div>
    </div>
  );
}

export default Portfolio;