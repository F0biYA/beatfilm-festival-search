import React from 'react';
import "./PhotoSlider.css";
import PhotoCard from "../PhotoCard/PhotoCard";
import { sliderData } from "../../utils/photoSliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoSlider() {
  const date = new Date();

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="photo-slider">
      {sliderData.map((card) => (
        <PhotoCard card={card} key={date} />
      ))}
    </Slider>
  );
}

export default PhotoSlider;
