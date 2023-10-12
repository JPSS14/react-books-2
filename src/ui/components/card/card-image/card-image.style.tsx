import { Theme, SxProps } from "@mui/material";

export const CardWithouImgStyle: SxProps<Theme> = (theme) => {
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
  };
};

export const CardImgContainerStyle: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "250px",
    padding: theme.spacing(2),
    "& img": {
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    },
  };
};
