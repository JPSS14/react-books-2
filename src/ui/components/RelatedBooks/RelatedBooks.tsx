import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";
import { relatedBooksStyle } from "./RelatedBooks.style";
import { settings } from "./settings";
import { ResponseBooksMapper } from "service/types";

interface RelatedBooksProps {
  items: ResponseBooksMapper;
}

export const RelatedBooks = ({ items: { items } }: RelatedBooksProps) => {
  return (
    <Box sx={relatedBooksStyle} component="section">
      <Box component="header" className="related__header">
        <Typography component="h2">Recomendados</Typography>
      </Box>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Slider>
    </Box>
  );
};
