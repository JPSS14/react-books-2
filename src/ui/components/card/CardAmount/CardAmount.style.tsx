import { SxProps, Theme } from "@mui/material";

export const CardAmountStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    color: rbooks.primaryColor,
    fontSize: "1.3rem",
    textAlign: "center",
    fontWeight: 700,
    minHeight: "31.2px",
  };
};
