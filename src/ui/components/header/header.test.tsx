import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Header } from "./Header";
import { theme } from "ui/components/Theme/theme-default";

describe("Header component", () => {
  test("renders the header with the correct text and link", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    const link = screen.getByRole("link", { name: /React Books 2/ });

    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/react-books-2");
  });
});
