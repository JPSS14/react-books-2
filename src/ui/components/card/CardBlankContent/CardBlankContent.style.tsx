import { SxProps, Theme } from "@mui/material";

export const CardBlankContainerStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .blank-book": {
      width: "150px",
      height: "218px",
      border: `3px dashed ${rbooks.primaryColor}`,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    "& .star-icon": {
      color: rbooks.primaryColor,
      fontSize: "5rem",
      marginTop: theme.spacing(2),
    },
    "& .blank-text": {
      width: "100%",
      textAlign: "center",
      color: rbooks.primaryColor,
      lineHeight: "1.2",
    },
    "& a": {
      textDecoration: "none",
    },
  };
};
