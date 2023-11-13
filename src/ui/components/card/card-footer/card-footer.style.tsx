import { SxProps, Theme } from "@mui/material";

export const CardFooterStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderRadius: "0 0 10px 10px",
    borderTop: `1px solid ${rbooks.primaryColor}`,
  };
};
