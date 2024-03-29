import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { CardCTAStyle } from "./CardCTA.style";
import { BookItemResponseMapper } from "service/types";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "contexts/search-context/search-context";

interface CardCTAProps {
  item: BookItemResponseMapper;
  blank?: boolean;
  defaultBooks?: boolean;
}

export const CardCTA = ({ item, blank, defaultBooks }: CardCTAProps) => {
  const { setActiveBook, searchBook } = useSearchContext();
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

  const handleSeeMore = (item: BookItemResponseMapper) => {
    history(`/book/${item.id}`);
    setActiveBook(item);
  };

  const handleSearchBook = (search: string) => {
    searchBook(search);
  };

  const handleDiscover = () => {
    history("/");
  };

  return (
    <Box sx={CardCTAStyle}>
      {blank ? (
        <Button color="primary" onClick={() => handleDiscover()}>
          Descobrir
        </Button>
      ) : defaultBooks ? (
        <Button
          color="primary"
          onClick={() => handleSearchBook(item.volumeInfo.title)}
        >
          Buscar
        </Button>
      ) : (
        <Button color="primary" onClick={() => handleSeeMore(item)}>
          Ver mais
        </Button>
      )}
      {blank || defaultBooks ? (
        ""
      ) : isFavorite || item.favorite ? (
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
