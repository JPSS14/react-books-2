import { Box } from "@mui/material";
import { Button } from "../button";
import { Input } from "../input";
import { searchStyle } from "./search.style";
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import { getSearch } from "../../../service/search.service";
import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState('');
  const searchBook = () => {
    if (search) {
      getSearch(search);
    }
  };

  const inputEnter = (input: string) => {
    if(input === 'Enter'){
      searchBook();
    }
  };
  return (
    <Box sx={searchStyle}>
      <Button color="primary">
        <Box component='span' className='button_title'>Favoritos</Box>
        <StarIcon />
      </Button>
      <Input size="small" onChange={(e) => setSearch(e.currentTarget.value)} onKeyUp={(e) => inputEnter(e.key)}/>
      <Button color="primary" onClick={() => searchBook()}>
        <SearchIcon />
        <Box component='span' className='button_title' >Pesquisar</Box>
      </Button>
    </Box>
  );
};