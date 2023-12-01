import { SxProps, Theme } from "@mui/material";

export const ratingStyle: SxProps<Theme> = () => {
  return {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "48px",
    ".MuiRating-icon": {
      color: "yellow",
      width: "100%",
    },
  };
};
