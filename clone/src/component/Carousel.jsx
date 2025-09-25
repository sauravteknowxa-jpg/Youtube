import "./style.css"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

  return (
     <>
        <div className="w-[600px] mx-auto">
            <Slider {...settings}>
                <div><img src="/image/pic49.jpg" alt="Slide 1" /></div>
                <div><img src="/image/pic50.jpg" alt="Slide 2" /></div>
                <div><img src="/image/image.png" alt="Slide 3" /></div>
            </Slider>
        </div>
     </>
 );
}           
export default Carousel;