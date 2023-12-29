import { Theme, SxProps } from "@mui/material";

export const sectionHeaderStyle =
  (backToHome?: boolean, noPaddingX?: boolean): SxProps<Theme> =>
  (theme) => {
    const { rbooks } = theme.palette;
    return {
      padding: noPaddingX
        ? `${theme.spacing(4)} ${theme.spacing(1)}`
        : theme.spacing(4),
      display: "flex",
      alignItems: "center",
      width: "100%",

      "& .section-title": {
        width: `${backToHome ? "calc(100% - 76px)" : "100%"}`,
        "& h1": {
          textAlign: "center",
          color: rbooks.primaryColor,
          fontSize: "1.7rem",
          fontWeight: 700,
        },
      },
    };
  };
