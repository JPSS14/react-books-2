import { useState } from "react";
import { Box } from "@mui/material";
import { Button, Input } from "ui/components";
import { searchStyle } from "./Search.style";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import { getSearch } from "service/search.service";
import { useSearchContext } from "contexts/search-context/search-context";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { setResultSearchBook } = useSearchContext();
  const history = useNavigate();
  const [search, setSearch] = useState("");
  const searchBook = () => {
    if (search) {
      getSearch(search).then((item) => {
        setResultSearchBook(item);
      });
    }
  };

  const inputEnter = (input: string) => {
    if (input === "Enter") {
      searchBook();
    }
  };

  const handleFavoritesPush = () => {
    history("/favorites");
  };
  return (
    <Box sx={searchStyle}>
      <Button color="primary" onClick={handleFavoritesPush}>
        <Box component="span" className="button_title">
          Favoritos
        </Box>
        <StarIcon />
      </Button>
      <Input
        size="small"
        onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyUp={(e) => inputEnter(e.key)}
        placeholder="Encontre seu livro"
      />
      <Button color="primary" onClick={() => searchBook()}>
        <SearchIcon />
        <Box component="span" className="button_title">
          Pesquisar
        </Box>
      </Button>
    </Box>
  );
};
