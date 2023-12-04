import { SxProps, Theme } from "@mui/material";

export const ratingStyle: SxProps<Theme> = () => {
  return {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "48px",
    "& p": {
      fontSize: "0.9rem",
      width: "100%",
      textAlign: "center",
    },
    ".MuiRating-icon": {
      color: "yellow",
      width: "100%",
    },
  };
};
