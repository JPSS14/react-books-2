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
    ".detail__container": {
      width: "calc(100% - 216px)",
      marginLeft: theme.spacing(2),
      height: "310.2px",
      ".detail__content": {
        height: "318.2px",
      },
      ".detail__description": {
        ".detail__description-content": {
          height: "154px",
          overflow: "hidden",
          overflowY: "scroll",
        },
      },
    },
  };
};
