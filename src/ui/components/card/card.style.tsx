import { Theme, SxProps } from "@mui/material";

export const CardContainerStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: "300px",
    height: "470px",
    border: `3px solid ${rbooks.primaryColor}`,
    borderRadius: "10px",
    margin: theme.spacing(1),
    position: "relative",
    background: theme.palette.common.black,
  };
};

export const CardContentStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: rbooks.darkGray,
    height: "calc(100% - 80px)",
  };
};
