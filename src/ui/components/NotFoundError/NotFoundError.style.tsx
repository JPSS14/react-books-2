import { SxProps, Theme } from "@mui/material";

export const notFoundErrorStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    padding: theme.spacing(3),
    color: rbooks.primaryColor,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& h1": {
      textAlign: "center",
      fontSize: "1.7rem",
      fontWeight: 700,
      width: "100%",
      marginBottom: theme.spacing(0.5),
    },
    ".image__container": {
      width: "500px",

      "& img": {
        width: "100%",
        borderRadius: "8px",
        border: `3px solid ${rbooks.primaryColor}`,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
    "& p": {
      width: "100%",
      textAlign: "center",
      fontSize: "1.2rem",
      margin: `${theme.spacing(2)} 0`,
    },
  };
};
