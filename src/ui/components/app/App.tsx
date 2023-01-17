import { Box } from "@mui/material";
import { Home } from "../../pages";
import { RBooksThemeProvider } from "../theme";

export const App = () => {
  return (
    <RBooksThemeProvider>
      <Box>
        <Home />
      </Box>
    </RBooksThemeProvider>
  );
};
