import { SxProps, Theme } from "@mui/material";

export const CardListContainerStyle: SxProps<Theme> = (theme) => {
  return {
    maxWidth: "1264px",
    padding: `0 0 ${theme.spacing(6)} 0`,
    "& li": {
      listStyle: "none",
    },
    margin: 0,
    "@media(max-width: 1263.2px)": {
      maxWidth: "948px",
    },
    "@media(max-width: 948px)": {
      maxWidth: "632px",
    },
    "@media(max-width: 632px)": {
      maxWidth: "316px",
    },
  };
};
