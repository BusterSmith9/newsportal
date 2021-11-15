import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export class BootstrapCarousel extends Component {  
  render() {  
    return (  
      <Carousel className="carousel">   
        <Carousel.Item className="itemcar">
          <img src = "./images/img6.jpg" alt="img" className="hello" /> 
        </Carousel.Item>        
        <Carousel.Item className="itemcar">
          <img src = "./images/img8.jpg" alt="img" className="hello" /> 
        </Carousel.Item>
        <Carousel.Item className="itemcar">
          <img src = "./images/img9.jpg" alt="img" className="hello" />
        </Carousel.Item>
        <Carousel.Item className="itemcar">
          <img src = "./images/img5.jpg" alt="img" className="hello1"/>  
        </Carousel.Item>
      </Carousel>
    )  
        
  }  
}

export default BootstrapCarousel;  