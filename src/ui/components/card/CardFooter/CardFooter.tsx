import { Box } from "@mui/material";
import { CardFooterStyle } from "./CardFooter.style";

interface CardFooterProps {
  publishedDate: string;
  blank?: boolean;
}

export const CardFooter = ({ publishedDate, blank }: CardFooterProps) => {
  return (
    <Box sx={CardFooterStyle} component="footer">
      {blank ? (
        <Box component="span">React Books 2</Box>
      ) : (
        <Box component="span">Publicado: {publishedDate}</Box>
      )}
    </Box>
  );
};
