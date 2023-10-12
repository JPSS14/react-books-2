import { Box, Typography } from "@mui/material";
import { CardImgContainerStyle, CardWithouImgStyle } from "./card-image.style";

interface CardImageProps {
  image?: string;
  title: string;
}

export const CardImage = (props: CardImageProps) => {
  const { title, image } = props;
  return (
    <Box sx={CardImgContainerStyle}>
      {image ? (
        <img src={image} alt={title} title={title} />
      ) : (
        <Box sx={CardWithouImgStyle}>
          <Typography component="span">Sem imagem</Typography>
        </Box>
      )}
    </Box>
  );
};
