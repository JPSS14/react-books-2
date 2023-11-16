import { Box } from "@mui/material";
import { CardFooterStyle } from "./CardFooter.style";

interface CardFooterProps {
  publisher?: string;
  blank?: boolean;
}

export const CardFooter = ({ publisher, blank }: CardFooterProps) => {
  return (
    <Box
      sx={CardFooterStyle}
      component="footer"
      title={
        publisher
          ? `Editora: ${publisher}`
          : blank
          ? "React Books 2"
          : "Editora: Desconhecida"
      }
    >
      {blank ? (
        <Box className="publisher">React Books 2</Box>
      ) : (
        <Box className="publisher">
          Editora: {publisher ? publisher : "Desconhecidas"}
        </Box>
      )}
    </Box>
  );
};
