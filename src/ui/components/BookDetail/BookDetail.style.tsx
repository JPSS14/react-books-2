import { SxProps, Theme } from "@mui/material";

export const bookDetailStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1536px",
    color: rbooks.primaryColor,
    margin: `${theme.spacing(2)} ${theme.spacing(4)}`,
    padding: theme.spacing(2),
    border: `3px solid ${rbooks.primaryColor}`,
    borderRadius: "10px",
    ".detail__container": {
      width: "calc(100% - 216px)",
      marginLeft: theme.spacing(2),
      ".detail__content": {
        height: "318.2px",
      },
      ".detail__description": {
        height: "334px",
        overflow: "hidden",
        ".detail__description-content": {
          height: "154px",
          overflow: "hidden",
          overflowY: "scroll",
        },
      },
      "@media(max-width: 740px)": {
        width: "100%",
        marginLeft: "0",
        ".detail__content": {
          height: "auto",
        },
        ".detail__description": {
          ".detail__description-content": {
            height: "246px",
          },
        },
      },
    },
  };
};
