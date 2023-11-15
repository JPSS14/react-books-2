import { Box, Typography } from "@mui/material";
import { CardTitleStyle } from "./CardHeader.style";

interface CardHeaderProps {
  title: string;
  blank?: boolean;
}

export const CardHeader = ({ title, blank }: CardHeaderProps) => {
  return (
    <Box
      sx={CardTitleStyle}
      title={blank ? "React Books 2" : title}
      component="header"
    >
      <Typography component="h2">{blank ? "React Books 2" : title}</Typography>
    </Box>
  );
};
