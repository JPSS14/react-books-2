import { SxProps, Theme } from "@mui/material";

export const relatedBooksStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    margin: `0 ${theme.spacing(4)}`,
    ".related__header": {
      textAlign: "center",
      color: rbooks.primaryColor,
      margin: `${theme.spacing(3)} 0`,
      "& h2": {
        fontSize: "1.7rem",
        fontWeight: 700,
      },
    },
    ".mobile": {
      display: "flex",
      justifyContent: "center",
      ".slick-track .slick-slide": {
        display: "flex",
        justifyContent: "center",
      },
    },
  };
};
