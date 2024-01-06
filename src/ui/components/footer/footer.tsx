import { Box, Typography } from "@mui/material";
import { FooterContainerStyle } from "./Footer.style";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box sx={FooterContainerStyle} component="footer">
      <Typography component="h1">
        <Link to="/">
          React <Box component="span">Books</Box> 2
        </Link>
      </Typography>
    </Box>
  );
};
