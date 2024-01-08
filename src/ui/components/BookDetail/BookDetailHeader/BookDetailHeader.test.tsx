import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { BookDetailHeader } from "./BookDetailHeader";

describe("BookDetailHeader", () => {
  test("a correct BookDetailHeader render without textSnippet", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookDetailHeader title="Titulo" />
      </ThemeProvider>
    );

    const bookDetailHeaderRender = screen.getByText("Titulo");

    expect(bookDetailHeaderRender).toBeInTheDocument();
  });

  test("a correct BookDetailHeader render with textSnippet", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookDetailHeader title="Titulo" textSnippet="Text" />
      </ThemeProvider>
    );

    const textSnippet = screen.getByText("Text");

    expect(textSnippet).toBeInTheDocument();
  });
});
