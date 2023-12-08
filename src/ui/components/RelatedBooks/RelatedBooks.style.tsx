import { SxProps, Theme } from "@mui/material";

export const relatedBooksStyle: SxProps<Theme> = (theme) => {
  return {
    margin: `0 ${theme.spacing(4)}`,
    ".teste": {
      display: "flex",
      justifyContent: "center",
      ".slick-track .slick-slide": {
        display: "flex",
        justifyContent: "center",
      },
    },
  };
};
