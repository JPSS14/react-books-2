import { Box, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sectionHeaderStyle } from "./SectionHeader.style";
import { useNavigate } from "react-router-dom";

interface SectionHeaderProps {
  title?: string;
  backToHome?: boolean;
  noPaddingX?: boolean;
}

export const SectionHeader = ({
  title,
  backToHome,
  noPaddingX,
}: SectionHeaderProps) => {
  const history = useNavigate();

  const handleBackToDashboard = () => {
    history("/");
  };
  return (
    <Box sx={sectionHeaderStyle(backToHome, noPaddingX)}>
      {backToHome ? (
        <IconButton color="primary" onClick={() => handleBackToDashboard()}>
          <KeyboardBackspaceIcon />
        </IconButton>
      ) : (
        ""
      )}
      <Box className="section-title">
        <Typography component="h1">{title}</Typography>
      </Box>
    </Box>
  );
};
