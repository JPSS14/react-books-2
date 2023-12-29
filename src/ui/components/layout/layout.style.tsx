import { Theme, SxProps } from "@mui/material";

export const layoutStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    position: "relative",
    background: rbooks.darkGray,
    height: "100%",
    width: "100%",

    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };
};
