import { Theme, SxProps } from "@mui/material";

export const searchStyle: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "center",

    button: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.8rem",
      fontWeight: 600,
      "& .icon": {
        fontSize: "1rem",
        margin: `0px ${theme.spacing(0.3)}`,
      },
      "&:last-of-type": {
        borderRadius: "0px 4px 4px 0px",
      },
      "&:first-of-type": {
        borderRadius: "4px 0px 0px 4px",
      },
    },
    "@media (max-width: 480px)": {
      "& .button_title": {
        display: "none",
      },
    },
  };
};
