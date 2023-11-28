import { SxProps, Theme } from "@mui/material";

export const bookDetailStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    display: "flex",
    flexWrap: "wrap",
    color: rbooks.primaryColor,
    margin: `${theme.spacing(2)} ${theme.spacing(4)}`,
    padding: theme.spacing(2),
    border: `3px solid ${rbooks.primaryColor}`,
    borderRadius: "10px",
    ".info": {
      fontWeight: 700,
      color: "#fff",
    },
    ".book__container": {
      display: "flex",
      flexWrap: "wrap",
      width: "200px",
      "& .detail__image-container": {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "218px",
        "& img": {
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        },
      },
    },
    ".detail__container": {
      width: "calc(100% - 216px)",
      marginLeft: theme.spacing(2),
      ".detail__header": {
        width: "100%",
        "& h1": {
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#fff",
        },
      },
      ".detail__description": {
        ".detail__description-content": {
          height: "200px",
          overflow: "hidden",
          overflowY: "scroll",
        },
      },
    },
    ".detail__cta": {
      width: "100%",
      borderTop: `3px solid ${rbooks.primaryColor}`,
    },
  };
};

export const bookDetailFooterStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: "100%",
    borderTop: `3px solid ${rbooks.primaryColor}`,
  };
};
