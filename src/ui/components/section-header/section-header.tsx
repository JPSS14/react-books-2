import { Box, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sectionHeaderStyle } from "./section-header.style";
import { useNavigate } from "react-router-dom";

export const SectionHeader = () => {
  const history = useNavigate();

  const handleBackToDashboard = () => {
    history("/react-books-2");
  };
  return (
    <Box sx={sectionHeaderStyle}>
      <IconButton color="primary" onClick={() => handleBackToDashboard()}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Box className="section-title">
        <Typography component="h1">Meus Favoritos</Typography>
      </Box>
    </Box>
  );
};
