import { SxProps, Theme } from "@mui/material";

export const CardCTAStyle: SxProps<Theme> = () => {
  return {
    display: "flex",
    flexDirection: "column",
    "& button": {
      margin: "10px auto",
    },
    "& .favorite__container": {
      width: "100%",
      "& svg": {
        color: "yellow",
      },
    },
  };
};
