import { Box, Typography } from "@mui/material";
import { BookDetailContentStyle } from "./BookDetailContent.style";

interface BookDetailContentProps {
  authors: string;
  publisher?: string;
  publishedDate: string;
  description?: string;
}

export const BookDetailContent = ({
  authors,
  publisher,
  publishedDate,
  description,
}: BookDetailContentProps) => {
  return (
    <Box sx={BookDetailContentStyle}>
      <Typography component="p">
        <Box component="span" className="info">
          Autor(es):
        </Box>{" "}
        {authors}
      </Typography>
      <Typography component="p">
        <Box component="span" className="info">
          Editora:
        </Box>{" "}
        {publisher ? publisher : "Desconhecida"}
      </Typography>
      <Typography component="p">
        <Box component="span" className="info">
          Data de Publicação:
        </Box>{" "}
        {publishedDate}
      </Typography>
      <Typography component="p" className="info">
        Descrição:
      </Typography>
      <Box className="detail__description-content">
        <Typography component="p">{description}</Typography>
      </Box>
    </Box>
  );
};
