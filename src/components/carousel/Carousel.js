import React from "react";
import Slider from "react-slick";
import './carousel.scss'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="./images/1.jpg" alt="" />
        </div>
        <div>
          <img src="./images/2.jpg" alt="" />
        </div>
        <div>
          <img src="./images/3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
