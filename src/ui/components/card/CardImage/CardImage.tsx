import { Box, Typography } from "@mui/material";
import { CardImgContainerStyle, CardWithouImgStyle } from "./CardImage.style";
import { CardBlankContent } from "../CardBlankContent";

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
        <Box sx={CardWithouImgStyle}>
          <Typography component="span">Sem imagem</Typography>
        </Box>
      )}
    </Box>
  );
};
