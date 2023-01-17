import { Box, Typography } from "@mui/material";
import { headerContainerStyle } from "./header.style";

export const Header = () => {
  return (
    <Box sx={headerContainerStyle}>
      <Typography component='h1'>React <Box component='span'>Books</Box> 2</Typography>
    </Box>
  );
};