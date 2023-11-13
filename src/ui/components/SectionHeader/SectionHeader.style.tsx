import { Theme, SxProps } from "@mui/material";

export const sectionHeaderStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    padding: `0 ${theme.spacing(4)}`,
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: theme.spacing(2),

    "& .section-title": {
      width: "calc(100% - 76px)",
      "& h1": {
        textAlign: "center",
        color: rbooks.primaryColor,
        fontSize: "1.7rem",
        fontWeight: 700,
      },
    },
  };
};
