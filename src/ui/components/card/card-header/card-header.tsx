import { Box, Typography } from "@mui/material";
import { CardTitleStyle } from "./card-header.style";

interface CardHeaderProps {
  title: string;
}

export const CardHeader = (props: CardHeaderProps) => {
  return (
    <Box sx={CardTitleStyle} title={props.title} component="header">
      <Typography component="h2">{props.title}</Typography>
    </Box>
  );
};
