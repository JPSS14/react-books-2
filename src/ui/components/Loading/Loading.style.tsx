import { Theme, SxProps } from "@mui/material";

export const loadingStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    color: rbooks.primaryColor,
  };
};
