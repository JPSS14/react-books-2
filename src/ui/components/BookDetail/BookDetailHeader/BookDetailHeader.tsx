import { Box, Typography } from "@mui/material";
import {
  bookDetailHeaderStyle,
  bookDetailSnippetStyle,
} from "./BookDetailHeader.style";

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
      <Box sx={bookDetailSnippetStyle(textSnippet)}>
        <Typography>{textSnippet}</Typography>
      </Box>
    </Box>
  );
};
