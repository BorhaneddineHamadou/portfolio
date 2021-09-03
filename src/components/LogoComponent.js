import React from 'react';

const Logo = (props) => {
   return(
       <div className="logo-wrapper">
           <div className="container">
               <video id="localVideoStream"  className="video-circle" width="200" height="200" autoPlay muted loop>
                   <source src="assets/videos/logo_video.mp4" type="video/mp4"></source>
               </video>
               {/* <img src="assets/images/logo_circle.png" /> */}
           </div>
       </div>
   );
}

export default Logo;