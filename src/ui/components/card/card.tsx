import { Box } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { CardContainerStyle, CardContentStyle } from "./card.style";
import { CardHeader } from "./card-header";
import { CardImage } from "./card-image";
import { CardAmount } from "./card-amount";
import { CardCTA } from "./card-cta";
import { CardFooter } from "./card-footer";

interface CardProps {
  item: BookItemResponseMapper;
}

export const Card = ({ item }: CardProps) => {
  return (
    <Box sx={CardContainerStyle} component="article">
      <CardHeader title={item.volumeInfo.title} />
      <Box sx={CardContentStyle}>
        <CardImage
          image={item.volumeInfo.imageLinks?.thumbnail}
          title={item.volumeInfo.title}
        />
        <CardAmount price={item.saleInfo.listPrice?.amount} />
        <CardCTA item={item} />
      </Box>
      <CardFooter publishedDate={item.volumeInfo.publishedDate} />
    </Box>
  );
};
