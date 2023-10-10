import { Home } from "ui/pages";
import { RBooksThemeProvider } from "ui/components/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <RBooksThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/react-books-2/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RBooksThemeProvider>
  );
};
