import { Box } from "@mui/material";
import { CardFooterStyle } from "./CardFooter.style";

interface CardFooterProps {
  publisher?: string;
  blank?: boolean;
}

export const CardFooter = ({ publisher, blank }: CardFooterProps) => {
  return (
    <Box sx={CardFooterStyle} component="footer">
      {blank ? (
        <Box component="span">React Books 2</Box>
      ) : (
        <Box component="span">Editora: {publisher}</Box>
      )}
    </Box>
  );
};
