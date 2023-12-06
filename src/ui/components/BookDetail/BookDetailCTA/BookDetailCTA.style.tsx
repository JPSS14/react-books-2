import { SxProps, Theme } from "@mui/material";

export const bookDetailCTAStyle: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "200px",
    height: "457.8px",
    "& .image__container": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "218px",
      "& img": {
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
    ".cta": {
      width: "100%",
      "& .cta__amount": {
        fontSize: "1.5rem",
        fontWeight: 700,
        textAlign: "center",
        marginTop: theme.spacing(2),
      },
    },
    "@media(max-width: 740px)": {
      width: "100%",
      height: "auto",
    },
  };
};
