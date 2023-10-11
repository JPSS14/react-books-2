import { Box, Typography } from "@mui/material";
import { FooterContainerStyle } from "./footer.style";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box sx={FooterContainerStyle}>
      <Typography component="h1">
        <Link to="\react-books-2">
          React <Box component="span">Books</Box> 2
        </Link>
      </Typography>
    </Box>
  );
};
