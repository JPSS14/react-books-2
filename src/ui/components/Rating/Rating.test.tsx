import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";

describe("Rating component", () => {
  test("a with value Rating render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Rating ratingsCount={5} />
      </ThemeProvider>
    );

    const renderRating = screen.getByText("5 avaliações");

    expect(renderRating).toBeInTheDocument();
  });

  test("a single Rating render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Rating ratingsCount={1} />
      </ThemeProvider>
    );

    const renderRating = screen.getByText("1 avaliação");

    expect(renderRating).toBeInTheDocument();
  });

  test("a without Rating render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Rating />
      </ThemeProvider>
    );

    const renderRating = screen.getByText("Sem avaliações");

    expect(renderRating).toBeInTheDocument();
  });
});
