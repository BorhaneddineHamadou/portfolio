import React, {useState} from 'react';
import { CarouselCaption, CarouselItem, Carousel, CarouselIndicators, CarouselControl } from 'reactstrap';

const images = [{url: 'cert1.png'}, {url: 'cert2.png'}, {url: 'cert3.png'}];

const items = [
    {
        src : 'assets/images/cert1.png',
        alt :'Java OOP Certification',
        width: '100%',
        caption : 'Introduction à la programmation orientée objet (en Java)'
    }, {
        src : 'assets/images/cert2.png',
        alt : 'Bootstrap Certification',
        width: '100%',
        caption : 'Front-End Web UI Frameworks and Tools: Bootstrap 4'
    }, {
        src : 'assets/images/cert3.png',
        alt : 'React Certification',
        width: '100%',
        caption : 'Front-End Web Development with React'
    }
];

const Certifications = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === items.length-1 ? 0 : activeIndex+1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const previousIndex = activeIndex === 0 ? items.length-1 : activeIndex-1;
        setActiveIndex(previousIndex);
    }

    const goToIndex = (newIndex) => {
       if (animating) return;
       setActiveIndex(newIndex);       
    }

    const slides = items.map((item) => {
      return(
          <CarouselItem
           onExiting={() => setAnimating(true)}
           onExited={() => setAnimating(false)}
           key={item.src}>
               <img src={item.src} alt={item.alt} />
               <CarouselCaption className="text-dark" captionText={item.caption} />
          </CarouselItem>
      );
    });

    return(
        <div className="certifications-wrapper" id="certifications">
            <div className="container">
                <h1>My Certifications</h1>
                <div className="carousel-wrapper">
                   <Carousel
                     activeIndex={activeIndex}
                     previous={previous}
                     next={next}
                   >
                        <CarouselIndicators items={items} onClickHandler={goToIndex} />  
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} /> 
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> 
                   </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Certifications;