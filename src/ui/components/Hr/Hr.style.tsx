import { SxProps, Theme } from "@mui/material";

export const hrStyle =
  (isMargin?: boolean): SxProps<Theme> =>
  (theme) => {
    const { rbooks } = theme.palette;
    return {
      borderColor: rbooks.primaryColor,
      borderWidth: "2px",
      width: "100%",
      margin: isMargin ? `${theme.spacing(3)} 0` : 0,
    };
  };
