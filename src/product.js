import React from "react";
import { Slide } from 'react-slideshow-image';// ye wala package download mar lena npm install react-slideshow-image
import ',/Product.css';
const slideImages = [
    {
      url: 'images/p1.png',
    },
    {
      url: 'images/p2.png',
    },
    {
      url: 'images/p3.png',
    },
    {
        url: 'images/p4.png',
      },
      {
        url: 'images/p5.png',
      },
      {
        url: 'images/p6.png',
      },
      {
        url: 'images/p7.png',
      },
      {
        url: 'images/p8.png',
      },
      {
        url: 'images/p9.png',
      },
      {
        url: 'images/p10.png',
      },
      {
        url: 'images/p11.png',
      },
      {
        url: 'images/p12.png',
      },
      {
        url: 'images/p13.png',
      },
  ];
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;