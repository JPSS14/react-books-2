import { Book, Favorites, Home } from "ui/pages";
import { RBooksThemeProvider } from "ui/components/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <RBooksThemeProvider>
      <BrowserRouter basename="/react-books-2/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </RBooksThemeProvider>
  );
};
