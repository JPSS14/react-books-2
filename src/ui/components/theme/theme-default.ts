import { createTheme } from "@mui/material";

const primaryColor = "#8C6645";
const secondaryColor = "#995243";
const darkPrimaryColor = "#59412C";
const darkGray = "#262626";
const gray = "#595959";

declare module "@mui/material/styles" {
  type RBooks = {
    primaryColor: string;
    secondaryColor: string;
    darkPrimaryColor: string;
    darkGray: string;
    gray: string;
  };
  interface Palette {
    rbooks: RBooks;
  }
  interface PaletteOptions {
    rbooks: RBooks;
  }
}

export const theme = createTheme({
  palette: {
    rbooks: {
      primaryColor,
      secondaryColor,
      darkPrimaryColor,
      darkGray,
      gray,
    },
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          "& .MuiPaginationItem-root": {
            background: "#8C6645",
            color: "#fff",
            "&:hover": {
              background: "#59412C",
              color: "#fff",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          background: "#8C6645",
          color: "#fff",
          "&:hover": {
            background: "#59412C",
          },
        },
        colorSecondary: {
          background: "#995243",
          color: "#fff",
          "&:hover": {
            background: "#59412C",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          background: "#8C6645",
          color: "#fff",
          "&:hover": {
            background: "#59412C",
          },
        },
        textSecondary: {
          background: "#995243",
          color: "#fff",
          "&:hover": {
            background: "#59412C",
          },
        },
      },
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (min-width:600px)": { minHeight: 64 },
    },
  },
});
