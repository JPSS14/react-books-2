import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { CardCTAStyle } from "./card-cta.style";
import { BookItemResponseMapper } from "service/types";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { useNavigate } from "react-router-dom";

interface CardCTAProps {
  item: BookItemResponseMapper;
}

export const CardCTA = ({ item }: CardCTAProps) => {
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
    <Box sx={CardCTAStyle}>
      <Button color="primary" onClick={() => handleSeeMore(item.id)}>
        Ver mais
      </Button>
      {isFavorite || item.favorite ? (
        <Box className="favorite__container">
          <IconButton
            onClick={() => handleRemoveFavorite(item)}
            data-testid="removeFavoriteButton"
          >
            <StarIcon />
          </IconButton>
        </Box>
      ) : (
        <Box className="favorite__container">
          <IconButton
            onClick={() => handleAddFavorite(item)}
            data-testid="addFavoriteButton"
          >
            <StarOutlineIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
