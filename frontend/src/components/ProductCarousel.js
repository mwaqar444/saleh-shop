import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import offer from "../image/offer2.jpg";
import fish from "../image/color.jpg";
import arrival from "../image/gfish.jpg";
import bam from "../image/bam-image.png";
import halal from "../image/Gluten-Vegan-Halal-white.avif";
import bottle from "../image/neu_5pro-CBD_BOTTLE.avif";

const ProductCarousel = () => {
  
  return (
    <Carousel pause="hover" className="bg-dark">

      <Carousel.Item>
        <img src={bam} alt="second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          src={halal} 
          style={{ borderRadius: "0" }}
          alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={bottle} alt="Fourth slide" />
        <Carousel.Caption>
          <h3 style={{color:"#15698c"}}>Neue Ankunft</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={offer} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{color:"#15698c"}}>Super effektiv</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default ProductCarousel;
