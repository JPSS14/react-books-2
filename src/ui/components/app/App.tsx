import { Box } from "@mui/material";
import { Home } from "ui/pages";
import { RBooksThemeProvider } from "ui/components/theme";

export const App = () => {
  return (
    <RBooksThemeProvider>
      <Box>
        <Home />
      </Box>
    </RBooksThemeProvider>
  );
};
