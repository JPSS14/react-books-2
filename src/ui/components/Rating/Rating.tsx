import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
  Box,
  Typography,
} from "@mui/material";
import { ratingStyle } from "./Rating.style";

interface RatingProps extends MuiRatingProps {
  ratingsCount?: number;
}

export const Rating = (props: RatingProps) => {
  const { ratingsCount } = props;
  return (
    <Box sx={ratingStyle}>
      <MuiRating {...props} />
      <Typography component="p">
        {ratingsCount
          ? ratingsCount > 1
            ? `${ratingsCount} avaliações`
            : `${ratingsCount} avaliação`
          : "Sem avaliações"}
      </Typography>
    </Box>
  );
};
