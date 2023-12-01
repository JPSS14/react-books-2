import { SxProps, Theme } from "@mui/material";

export const blankBookStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    border: `2px solid ${rbooks.primaryColor}`,
    width: "143px",
    height: "218px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: rbooks.primaryColor,
    pointerEvents: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  };
};
