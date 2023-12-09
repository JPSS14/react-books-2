import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { defaultBooks } from "constants/default-books";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";
import { relatedBooksStyle } from "./RelatedBooks.style";

export const RelatedBooks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1484,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 895,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 782,
        settings: {
          slidesToShow: 2.02,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 683,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          className: "mobile",
        },
      },
    ],
  };

  return (
    <Box sx={relatedBooksStyle} component="section">
      <Box component="header" className="related__header">
        <Typography component="h2">Recomendados</Typography>
      </Box>
      <Slider {...settings}>
        {defaultBooks.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Slider>
    </Box>
  );
};
