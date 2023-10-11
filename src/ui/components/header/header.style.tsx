import { Theme, SxProps } from "@mui/material";

export const headerContainerStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: "100%",
    padding: `${theme.spacing(0.5)} 0`,
    background: theme.palette.common.black,
    borderBottom: `3px solid ${rbooks.primaryColor}`,
    marginBottom: theme.spacing(4),
    textAlign: "center",

    "& a": {
      color: theme.palette.common.white,
      fontSize: "1.7rem",
      fontWeight: 700,
      textDecoration: "none",

      "& span": {
        color: rbooks.primaryColor,
      },
    },
  };
};
