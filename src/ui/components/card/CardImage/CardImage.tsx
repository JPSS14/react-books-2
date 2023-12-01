import { Box } from "@mui/material";
import { CardImgContainerStyle } from "./CardImage.style";
import { CardBlankContent } from "../CardBlankContent";
import { BlankBook } from "ui/components/BlankBook";

interface CardImageProps {
  image?: string;
  title: string;
  blank?: boolean;
}

export const CardImage = (props: CardImageProps) => {
  const { title, image, blank } = props;
  return (
    <Box sx={CardImgContainerStyle}>
      {blank ? (
        <CardBlankContent />
      ) : image ? (
        <img src={image} alt={title} title={title} />
      ) : (
        <BlankBook />
      )}
    </Box>
  );
};
