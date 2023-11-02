import { Box, Typography } from "@mui/material";
import { headerContainerStyle } from "./header.style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box sx={headerContainerStyle} component="header">
      <Box component="nav">
        <Typography component="h1">
          <Link to="/react-books-2">
            React <Box component="span">Books</Box> 2
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
