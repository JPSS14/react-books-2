import { Box, IconButton, Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { BookItemResponseMapper } from "service/types";
import { Button } from "../button";
import {
  CardAmountStyle,
  CardContainerStyle,
  CardContentStyle,
  CardCTAStyle,
  CardFooterStyle,
  CardImgContainerStyle,
  CardTitleStyle,
} from "./card.style";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { useState } from "react";

interface CardProps {
  item: BookItemResponseMapper;
}

export const Card = ({ item }: CardProps) => {
  const { handleSaveFavorite, handleDeleteFavorite } = useFavoriteContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = (id: BookItemResponseMapper) => {
    setIsFavorite(true);
    handleSaveFavorite(id);
  };

  const handleRemoveFavorite = (id: BookItemResponseMapper) => {
    setIsFavorite(false);
    handleDeleteFavorite(id);
  };

  return (
    <Box sx={CardContainerStyle} component="article">
      <Box sx={CardTitleStyle} title={item.volumeInfo.title} component="header">
        <Typography component="h2">{item.volumeInfo.title}</Typography>
      </Box>
      <Box sx={CardContentStyle}>
        <Box sx={CardImgContainerStyle}>
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={item.volumeInfo.title}
              title={item.volumeInfo.title}
            />
          ) : (
            ""
          )}
        </Box>
        <Box sx={CardAmountStyle}>
          {item.saleInfo.listPrice?.amount
            ? item.saleInfo.listPrice?.amount
            : "Indisponível"}
        </Box>
        <Box sx={CardCTAStyle}>
          <Button color="primary">Ver mais</Button>
          {isFavorite ? (
            <Box className="favorite__container">
              <IconButton onClick={() => handleRemoveFavorite(item)}>
                <StarIcon />
              </IconButton>
            </Box>
          ) : (
            <Box className="favorite__container">
              <IconButton onClick={() => handleAddFavorite(item)}>
                <StarOutlineIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={CardFooterStyle} component="footer">
        Publicado: {item.volumeInfo.publishedDate}
      </Box>
    </Box>
  );
};
