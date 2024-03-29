import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Button, Input, Loading } from "ui/components";
import { searchStyle } from "./Search.style";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchContext } from "contexts/search-context/search-context";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { searchBook, searchedBookTitle, loadingSearchBook } =
    useSearchContext();
  const history = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchedBookTitle);
  }, [searchedBookTitle]);

  const inputEnter = (input: string) => {
    if (input === "Enter") {
      searchBook(search);
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
        <StarIcon className="icon" />
      </Button>
      <Input
        size="small"
        onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyUp={(e) => inputEnter(e.key)}
        placeholder="Encontre seu livro"
        value={search}
      />
      <Button color="primary" onClick={() => searchBook(search)}>
        {loadingSearchBook ? (
          <Loading white isSmall />
        ) : (
          <SearchIcon className="icon" />
        )}
        <Box component="span" className="button_title">
          Pesquisar
        </Box>
      </Button>
    </Box>
  );
};
