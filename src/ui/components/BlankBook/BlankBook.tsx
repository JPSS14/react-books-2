import { Box, Typography } from "@mui/material";
import { blankBookStyle } from "./BlankBook.style";

export const BlankBook = () => {
  return (
    <Box sx={blankBookStyle}>
      <Typography component="span">Sem imagem</Typography>
    </Box>
  );
};
