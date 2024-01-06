import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { theme } from "ui/components/Theme/theme-default";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("a correct Footer render", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    );

    const footerRender = screen.getByText(/React/);
    const link = screen.getByRole("link", { name: "React Books 2" });

    expect(footerRender).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
