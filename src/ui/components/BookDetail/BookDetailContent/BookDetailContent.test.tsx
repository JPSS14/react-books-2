import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { BookDetailContent } from "./BookDetailContent";

describe("BookDetailContent", () => {
  test("a correct BookDetailContent render", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookDetailContent authors="Tolkien" publishedDate="14/02/1999" />
      </ThemeProvider>
    );

    const renderAuthor = screen.getByText("Tolkien");
    const renderPublishedDate = screen.getByText("14/02/1999");
    const withoutPublisher = screen.getByText("Desconhecida");

    expect(renderAuthor).toBeInTheDocument();
    expect(renderPublishedDate).toBeInTheDocument();
    expect(withoutPublisher).toBeInTheDocument();
  });

  test("a correct BookDetailContent render with publisher", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookDetailContent
          authors="Tolkien"
          publishedDate="14/02/1999"
          publisher="Galera"
        />
      </ThemeProvider>
    );

    const renderAuthor = screen.getByText("Tolkien");
    const renderPublishedDate = screen.getByText("14/02/1999");
    const withPublisher = screen.getByText("Galera");

    expect(renderAuthor).toBeInTheDocument();
    expect(renderPublishedDate).toBeInTheDocument();
    expect(withPublisher).toBeInTheDocument();
  });

  test("a correct BookDetailContent render with description", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookDetailContent
          authors="Tolkien"
          publishedDate="14/02/1999"
          publisher="Galera"
          description="Descrição do livro"
        />
      </ThemeProvider>
    );

    const renderAuthor = screen.getByText("Tolkien");
    const renderPublishedDate = screen.getByText("14/02/1999");
    const withPublisher = screen.getByText("Galera");
    const withDescription = screen.getByAltText("Descrição do livro");

    expect(renderAuthor).toBeInTheDocument();
    expect(renderPublishedDate).toBeInTheDocument();
    expect(withPublisher).toBeInTheDocument();
    expect(withDescription).toBeInTheDocument();
  });
});
