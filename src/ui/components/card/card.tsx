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
  blank?: boolean;
}

export const Card = ({ item, blank }: CardProps) => {
  return (
    <Box sx={CardContainerStyle} component="article">
      <CardHeader title={item.volumeInfo.title} blank={blank} />
      <Box sx={CardContentStyle}>
        <CardImage
          image={item.volumeInfo.imageLinks?.thumbnail}
          title={item.volumeInfo.title}
          blank={blank}
        />
        <CardAmount price={item.saleInfo.listPrice?.amount} blank={blank} />
        <CardCTA item={item} blank={blank} />
      </Box>
      <CardFooter publishedDate={item.volumeInfo.publishedDate} blank={blank} />
    </Box>
  );
};
