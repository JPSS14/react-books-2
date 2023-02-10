import { Box, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { BookItem } from "service/types";
import { Button } from '../button';
import {
  CardAmountStyle,
  CardContainerStyle,
  CardContentStyle,
  CardCTAStyle,
  CardFooterStyle,
  CardImgContainerStyle,
  CardTitleStyle
} from './card.style';

interface CardProps {
  item: BookItem
};

export const Card = (props: CardProps) => {
  const { item } = props;
  return (
    <Box sx={CardContainerStyle} component="article">
      <Box sx={CardTitleStyle} title={item.volumeInfo.title} component="header">
        <Typography component="h2">{item.volumeInfo.title}</Typography>
      </Box>
      <Box sx={CardContentStyle}>
        <Box sx={CardImgContainerStyle}>
          {item.volumeInfo.imageLinks?.thumbnail ?
            <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} title={item.volumeInfo.title} /> : ''}
        </Box>
        {/* TODO: Adicionar no mapper conversão para o valor de acordo com o país. EX: 39.9 -> R$ 39,90 */}
        <Box sx={CardAmountStyle}>
          {item.saleInfo.listPrice?.amount ? `R$ ${item.saleInfo.listPrice?.amount}` : 'Indisponível'}
        </Box>
        <Box sx={CardCTAStyle}>
          <Button color="primary">Ver mais</Button>
          <Box className="favorite__container">
            <StarOutlineIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={CardFooterStyle} component="footer">Publicado: {item.volumeInfo.publishedDate}</Box>
    </Box>
  );
};