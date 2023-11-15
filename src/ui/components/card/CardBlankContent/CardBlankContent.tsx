import { Box } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CardBlankContainerStyle } from "./CardBlankContent.style";
import { Link } from "react-router-dom";

export const CardBlankContent = () => {
  return (
    <Box sx={CardBlankContainerStyle}>
      <Link to="/react-books-2">
        <Box className="blank-book">
          <StarOutlineIcon className="star-icon" />
          <Box className="blank-text">Descubra seu próximo livro favorito!</Box>
        </Box>
      </Link>
      <Box></Box>
    </Box>
  );
};
