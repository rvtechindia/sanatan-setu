import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ children, id }) => {
  return (
    <OwlCarousel
      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-theme "
      margin={20}
      dots
      lazyLoad
      animateIn={true}
      id={id}
    >
      {children}
    </OwlCarousel>
  );
};

export default Carousel;
