import { SxProps, Theme } from "@mui/material";

export const bookDetailFooterStyle: SxProps<Theme> = () => {
  return {
    width: "100%",
    ".footer__item": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "initial",
      alignItems: "center",
      textAlign: "center",
      "& span": {
        fontWeight: "700",
        color: "#fff",
      },
      "& svg": {
        fontSize: "2rem",
        color: "#fff",
      },
    },
  };
};
