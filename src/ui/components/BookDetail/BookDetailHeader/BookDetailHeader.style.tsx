import { SxProps, Theme } from "@mui/material";

export const bookDetailHeaderStyle: SxProps<Theme> = () => {
  return {
    width: "100%",
    "& h1": {
      fontWeight: 700,
      fontSize: "1.3rem",
      color: "#fff",
    },
  };
};

export const bookDetailSnippetStyle =
  (textSnippet?: string): SxProps<Theme> =>
  (theme) => {
    return {
      height: "48px",
      "& p": {
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      "@media(max-width: 740px)": {
        height: "auto",
        marginTop: textSnippet ? theme.spacing(1) : "",
      },
    };
  };
