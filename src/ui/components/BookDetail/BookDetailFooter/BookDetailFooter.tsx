import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { bookDetailFooterStyle } from "./BookDetailFooter.style";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TranslateIcon from "@mui/icons-material/Translate";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QrCode2Icon from "@mui/icons-material/QrCode2";

interface BookDetailFooterProps {
  pageCount?: number;
  language?: string;
  publisher?: string;
  publishedDate?: string;
  isnb10: {
    type: string;
    identifier: string;
  };
  isnb13: {
    type: string;
    identifier: string;
  };
}

export const BookDetailFooter = ({
  pageCount,
  language,
  publisher,
  publishedDate,
  isnb10,
  isnb13,
}: BookDetailFooterProps) => {
  const isLargeScreen = useMediaQuery("(max-width:1280px)");
  const isSmallScreen = useMediaQuery("(max-width:610px)");
  return (
    <Box component="footer" sx={bookDetailFooterStyle}>
      <Grid container alignContent="center" flexWrap="wrap">
        <Grid
          item
          lg={2}
          xs={isSmallScreen ? 6 : 3}
          display="flex"
          justifyContent="center"
          alignItems="start"
          marginBottom={1}
        >
          <Box className="footer__item">
            <AutoStoriesIcon />
            <Typography component="span">Páginas:</Typography>
            {pageCount}
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          xs={isSmallScreen ? 6 : 3}
          display="flex"
          justifyContent="center"
          alignItems="start"
        >
          <Box className="footer__item">
            <TranslateIcon />
            <Typography component="span">Idioma:</Typography>
            {language}
          </Box>
        </Grid>
        {!isLargeScreen && (
          <>
            <Grid
              item
              lg={2}
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="start"
            >
              <Box className="footer__item">
                <BusinessIcon />
                <Typography component="span">Editora:</Typography>
                {publisher ? publisher : "Desconhecida"}
              </Box>
            </Grid>
            <Grid
              item
              lg={2}
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="start"
            >
              <Box className="footer__item">
                <CalendarMonthIcon />
                <Typography component="span">Publicado em:</Typography>
                {publishedDate}
              </Box>
            </Grid>
          </>
        )}
        <Grid
          item
          lg={2}
          xs={isSmallScreen ? 6 : 3}
          display="flex"
          justifyContent="center"
          alignItems="start"
        >
          <Box className="footer__item">
            <QrCode2Icon />
            <Typography component="span">{isnb10.type}:</Typography>
            {isnb10.identifier}
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          xs={isSmallScreen ? 6 : 3}
          display="flex"
          justifyContent="center"
          alignItems="start"
        >
          <Box className="footer__item">
            <QrCode2Icon />
            <Typography component="span">{isnb13.type}:</Typography>
            {isnb13.identifier}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
