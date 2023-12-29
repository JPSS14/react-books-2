import { Theme, SxProps } from "@mui/material";

export const loadingStyle =
  (isSmall?: boolean, white?: boolean): SxProps<Theme> =>
  (theme) => {
    const { rbooks } = theme.palette;
    return {
      color: white ? "#fff" : rbooks.primaryColor,
      marginRight: isSmall ? theme.spacing(0.5) : "",
    };
  };
