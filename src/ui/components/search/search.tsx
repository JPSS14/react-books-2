import { Box } from "@mui/material";
import { Button } from "../button";
import { Input } from "../input";
import { searchStyle } from "./search.style";
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <Box sx={searchStyle}>
      <Button color="primary" size='small'>
        <Box component='span' className='button_title'>Favoritos</Box>
        <StarIcon />
      </Button>
      <Input size="small" />
      <Button color="primary" size='small'>
        <SearchIcon />
        <Box component='span' className='button_title'>Pesquisar</Box>
      </Button>
    </Box>
  );
};