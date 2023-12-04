import { Box, Typography } from "@mui/material";
import { bookDetailHeaderStyle } from "./BookDetailHeader.style";

interface BookDetailHeaderProps {
  title: string;
  textSnippet?: string;
}

export const BookDetailHeader = ({
  title,
  textSnippet,
}: BookDetailHeaderProps) => {
  return (
    <Box component="header" sx={bookDetailHeaderStyle}>
      <Typography component="h1">{title}</Typography>
      <Box className="detail__snippet">
        <Typography>{textSnippet}</Typography>
      </Box>
    </Box>
  );
};
