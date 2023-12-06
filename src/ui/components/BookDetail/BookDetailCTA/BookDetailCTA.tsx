import { Box, Typography, useMediaQuery } from "@mui/material";
import { Button } from "ui/components/Button";
import { bookDetailCTAStyle } from "./BookDetailCTA.style";
import { Hr } from "ui/components/Hr";
import { Rating } from "ui/components/Rating";
import { BlankBook } from "ui/components/BlankBook";

interface BookDetailCTAProps {
  image?: string;
  title: string;
  amount?: string;
  rating?: number;
  ratingsCount?: number;
  readLink?: string;
  buyLink?: string;
}

export const BookDetailCTA = ({
  image,
  title,
  amount,
  rating,
  ratingsCount,
  readLink,
  buyLink,
}: BookDetailCTAProps) => {
  const isSmallScreen = useMediaQuery("(max-width:740px)");

  const handleReadMore = () => {
    if (readLink) {
      window.open(readLink, "_blank");
    }
  };

  const handleBuyBook = () => {
    if (buyLink) {
      window.open(buyLink, "_blank");
    }
  };
  return (
    <Box sx={bookDetailCTAStyle}>
      <Box className="image__container">
        {image ? <img src={image} alt={title} title={title} /> : <BlankBook />}
      </Box>
      <Box className="cta">
        <Typography component="p" className="cta__amount">
          {amount ? amount : "Indisponível"}
        </Typography>
        <Rating value={rating} ratingsCount={ratingsCount} readOnly />
        <Hr isMargin />
        <Button
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "8px" }}
          disabled={readLink ? false : true}
          onClick={() => handleReadMore()}
        >
          Ler Amostra
        </Button>
        <Button
          fullWidth
          sx={{ marginBottom: "8px" }}
          disabled={buyLink ? false : true}
          onClick={() => handleBuyBook()}
        >
          Comprar
        </Button>
        {isSmallScreen && <Hr isMargin />}
      </Box>
    </Box>
  );
};
