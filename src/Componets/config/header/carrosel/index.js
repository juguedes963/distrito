import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Img1 from '../../../../assets/ca1.jpg'
import Img2 from '../../../../assets/galeria2.jpg'
import Img3 from '../../../../assets/w.jpeg'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img width="30vh"
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
           width="auto"
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
           width="auto"
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />
  
        
        </Carousel.Item>
      </Carousel>
    );
  }