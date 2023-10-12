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

export const CardAmountStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    color: rbooks.primaryColor,
    fontSize: "1.3rem",
    textAlign: "center",
    fontWeight: 700,
  };
};

export const CardCTAStyle: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    flexDirection: "column",
    "& button": {
      margin: "10px auto",
    },
    "& .favorite__container": {
      width: "100%",
      "& svg": {
        color: "yellow",
      },
    },
  };
};

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
