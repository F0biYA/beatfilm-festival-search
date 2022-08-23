import React, { useEffect, useState } from "react";
import './Gallery.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DECK_CARD, TABLET_CARD, MOBILE_CARD } from "../../utils/constants";
import PhotoCard from "../PhotoCard/PhotoCard";
function Gallery(props) {
  const date = new Date();
  const movies = DECK_CARD || TABLET_CARD || MOBILE_CARD;
  const [count, setCount] = useState(movies);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
  }, [])

  const resizeWindow = () => {
    if (window.innerWidth >= 1140) {
      setCount(3);
    } else if (window.innerWidth < 1140 && window.innerWidth >= 480) {
      setCount(2);
    } else setCount(1);
  }

  const settings = {
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="gallery">
      {(props.movie).map((movie) => (
        <PhotoCard movie={movie} key={date} />
      ))}
    </Slider>
  );

}
export default Gallery;
