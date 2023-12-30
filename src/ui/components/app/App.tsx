import { Book, Favorites, Home } from "ui/pages";
import { RBooksThemeProvider } from "ui/components/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const basename = isLocalhost ? "/" : "/react-books-2";

  return (
    <RBooksThemeProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/react-books-2/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </RBooksThemeProvider>
  );
};
