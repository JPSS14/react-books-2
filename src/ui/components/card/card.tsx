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
  CardWithouImgStyle,
} from "./card.style";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardHeader } from "./card-header";

interface CardProps {
  item: BookItemResponseMapper;
}

export const Card = ({ item }: CardProps) => {
  const { handleSaveFavorite, handleDeleteFavorite } = useFavoriteContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useNavigate();

  const handleAddFavorite = (book: BookItemResponseMapper) => {
    setIsFavorite(true);
    const isFavoriteItem = {
      ...book,
      favorite: true,
    };
    handleSaveFavorite(isFavoriteItem);
  };

  const handleRemoveFavorite = (book: BookItemResponseMapper) => {
    setIsFavorite(false);
    const isFavoriteItem = {
      ...book,
      favorite: false,
    };
    handleDeleteFavorite(isFavoriteItem);
  };

  const handleSeeMore = (id: string) => {
    history(`/book/${id}`);
  };

  return (
    <Box sx={CardContainerStyle} component="article">
      <CardHeader title={item.volumeInfo.title} />
      <Box sx={CardContentStyle}>
        <Box sx={CardImgContainerStyle}>
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={item.volumeInfo.title}
              title={item.volumeInfo.title}
            />
          ) : (
            <Box sx={CardWithouImgStyle}>
              <Typography component="span">Sem imagem</Typography>
            </Box>
          )}
        </Box>
        <Box sx={CardAmountStyle}>
          {item.saleInfo.listPrice?.amount
            ? item.saleInfo.listPrice?.amount
            : "Indisponível"}
        </Box>
        <Box sx={CardCTAStyle}>
          <Button color="primary" onClick={() => handleSeeMore(item.id)}>
            Ver mais
          </Button>
          {isFavorite || item.favorite ? (
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
