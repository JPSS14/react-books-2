import { SxProps, Theme } from "@mui/material";

export const bookDetailHeaderStyle: SxProps<Theme> = () => {
  return {
    width: "100%",
    "& h1": {
      fontWeight: 700,
      fontSize: "1.3rem",
      color: "#fff",
    },

    ".detail__snippet": {
      height: "48px",
      "& p": {
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  };
};
