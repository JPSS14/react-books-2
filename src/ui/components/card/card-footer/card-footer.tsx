import { Box } from "@mui/material";
import { CardFooterStyle } from "./card-footer.style";

interface CardFooterProps {
  publishedDate: string;
}

export const CardFooter = ({ publishedDate }: CardFooterProps) => {
  return (
    <Box sx={CardFooterStyle} component="footer">
      Publicado: {publishedDate}
    </Box>
  );
};
