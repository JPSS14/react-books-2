import { Box, Typography } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { bookDetailFooterStyle, bookDetailStyle } from "./BookDetail.style";
import { Button } from "../Button";

interface BookDetailProps {
  item: BookItemResponseMapper;
}

export const BookDetail = ({ item }: BookDetailProps) => {
  return (
    <Box sx={bookDetailStyle} component="article">
      <Box className="book__container">
        <Box className="detail__image-container">
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={item.volumeInfo.title}
              title={item.volumeInfo.title}
            />
          ) : (
            "Sem imagem"
          )}
        </Box>
        <Box className="detail__cta">
          <Typography component="p">
            {item.saleInfo.listPrice?.amount}
          </Typography>
          <Box component="span">Average Rating</Box>
          <Button variant="outlined">Ler Amostra</Button>
          <Button>Comprar</Button>
        </Box>
      </Box>
      <Box className="detail__container">
        <Box component="header" className="detail__header">
          <Typography component="h1">{item.volumeInfo.title}</Typography>
          <Typography>{item.searchInfo?.textSnippet}</Typography>
          <Typography component="p">
            <Box component="span" className="info">
              Autor(es):
            </Box>{" "}
            {item.volumeInfo.authors}
          </Typography>
          <Typography component="p">
            <Box component="span" className="info">
              Editora:
            </Box>{" "}
            {item.volumeInfo.publisher}
          </Typography>
          <Typography component="p">
            <Box component="span" className="info">
              Data de Publicação:
            </Box>{" "}
            {item.volumeInfo.publishedDate}
          </Typography>
        </Box>
        <Box className="detail__description">
          <Typography component="p" className="info">
            Descrição:
          </Typography>
          <Box className="detail__description-content">
            <Typography component="p">{item.volumeInfo.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box component="footer" sx={bookDetailFooterStyle}>
        Metadata
        <Box>
          Número de páginas, Idioma, Editora??, Data de publicação, ISNB-10,
          ISNB-13
        </Box>
      </Box>
    </Box>
  );
};
