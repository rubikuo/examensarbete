import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlickCard from "../SlickCard/SlickCard";
import { data } from "../../utility/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.scss";

const Slick = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    draggable: true,
    touchMove: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider">
      {data.map((slide, i) => {
        return (
          <SlickCard
            key={slide.id}
            project={slide.project}
            id={slide.id}
            type={slide.type}
            hashtag={slide.hashtag}
            url={slide.url}
            imgSrc={slide.imgSrc}
          />
        );
      })}
    </Slider>
  );
};

export default Slick;
