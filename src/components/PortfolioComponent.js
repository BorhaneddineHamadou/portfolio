import React, {Component} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RenderImage = ({image, title, logo, aos, aos_offset}) =>{
  return(
      <div data-aos={aos} data-aos-offset={aos_offset} className="portfolio-image-container col-9 col-sm-5 col-lg m-3">
          <div className="h6 align-items-center">
             <img src={logo} width="100px" />
             <h6>{title}</h6>
          </div>
          <img src={image} alt={title} width="100%" height="185px" />
      </div>
  );
}

class Portfolio extends Component {

  componentDidMount(){
      Aos.init();
  }  

  render(){
    return(
        <div className="portfolio-container" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="row mb-5">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div className="row p-container">
                    <RenderImage aos="zoom-out-down" aos_offset="100" image="assets/images/somu.png" title="SomuAgency Website" logo="assets/images/logo_somu.png" key="1" />
                    <RenderImage aos="zoom-in" aos_offset="100" image="assets/images/ahmedsellami.png" title="Ahmed Sellami Website" logo="assets/images/logo_ahmed.png" key="2" />  
                    <RenderImage aos="fade-up" aos_offset="100" image="assets/images/imtyaz.png" title="Imtyaz Android App" logo="assets/images/logo_imtyaz.png" key="3" /> 
                    <RenderImage aos="fade-down" aos_offset="100" image="assets/images/souqziwa.png" title="Souq Ziwa Android App" logo="assets/images/logo_ziwa.png" key="4" /> 
                </div> 
            </div>
        </div>
      );
  }  
}

export default Portfolio;