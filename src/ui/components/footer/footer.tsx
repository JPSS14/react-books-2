import {Box, Typography} from "@mui/material";
import { FooterContainerStyle } from "./footer.style";

export const Footer = () => {
  return (
    <Box sx={FooterContainerStyle}>
      <Typography component='h1'>React <Box component='span'>Books</Box> 2</Typography>
    </Box>
  );
};