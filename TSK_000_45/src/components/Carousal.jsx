import React from "react";
import Slider from "react-slick";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cartItems } from "../assets/assets";
import Card from "./Card";

const Carousal = () => {
  const settings = {
    lazyLoad: "ondemand",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="cakes" className="mx-4 md:mx-16 lg:mx-28">
      <Slider {...settings}>
        {cartItems.map((item) => (
          <div key={item.id} className="px-2">
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
