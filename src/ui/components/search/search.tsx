import { Box } from "@mui/material";
import { Button } from "../button";
import { Input } from "../input";
import { searchStyle } from "./search.style";

export const Search = () => {
  return (
    <Box sx={searchStyle}>
      <Button color="primary" size='small'>Favoritos</Button>
      <Input size="small" />
      <Button color="primary" size='small'>Pesquisar</Button>
    </Box>
  );
};