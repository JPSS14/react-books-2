import { screen, render } from "@testing-library/react";
import { CardBlankContent } from "./CardBlankContent";
import { theme } from "ui/components/Theme/theme-default";
import { ThemeProvider } from "@mui/material";
import { MemoryRouter } from "react-router-dom";

describe("CardBlankContent", () => {
  test("a correct CardBlankContent render", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <CardBlankContent />
        </MemoryRouter>
      </ThemeProvider>
    );

    const cardBlankContentRender = screen.getByText(
      /Descubra seu próximo livro favorito!/
    );
    const link = screen.getByRole("link", {
      name: /Descubra seu próximo livro favorito!/,
    });

    expect(cardBlankContentRender).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/react-books-2");
  });
});
