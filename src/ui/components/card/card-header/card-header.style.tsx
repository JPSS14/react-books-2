import { Theme, SxProps } from "@mui/material";

export const CardTitleStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    height: "40px",
    borderRadius: "10px 10px 0px 0px",
    borderBottom: `1px solid ${rbooks.primaryColor}`,
    padding: "10px",
    whiteSpace: "nowrap",
    textAlign: "center",
    "& h2": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };
};
