import { Box } from "@mui/material";
import { Home } from "../../pages";
import { RBooksThemeProvider } from "../theme";
import { appStyle } from "./app.style";


export const App = () => {
  return (
    <RBooksThemeProvider>
      <Box sx={appStyle}>
        <Home />
      </Box>
    </RBooksThemeProvider>
  );
};
