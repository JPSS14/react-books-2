import { Box } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { CardContainerStyle, CardContentStyle } from "./Card.style";
import { CardHeader } from "./CardHeader";
import { CardImage } from "./CardImage";
import { CardAmount } from "./CardAmount";
import { CardCTA } from "./CardCTA";
import { CardFooter } from "./CardFooter";

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
