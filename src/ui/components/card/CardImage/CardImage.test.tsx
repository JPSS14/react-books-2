import { render, screen } from "@testing-library/react";
import { CardImage } from "./CardImage";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { MemoryRouter } from "react-router-dom";

describe("a CardImage test", () => {
  it("a correct CardImage render without image", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardImage title="Teste" />
      </ThemeProvider>
    );

    const cardImageRender = screen.getByText("Sem imagem");

    expect(cardImageRender).toBeInTheDocument();
  });

  it("a correct CardImage render with blank prop", () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <CardImage title="Teste" blank />
        </ThemeProvider>
      </MemoryRouter>
    );

    const cardImageRender = screen.getByText(
      "Descubra seu próximo livro favorito!"
    );

    expect(cardImageRender).toBeInTheDocument();
  });

  it("a correct CardImage render with image", () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <CardImage title="Teste" image="teste" />
        </ThemeProvider>
      </MemoryRouter>
    );

    const cardImageRender = screen.getByAltText("Teste");

    expect(cardImageRender).toBeInTheDocument();
  });
});
