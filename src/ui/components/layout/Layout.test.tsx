import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { Layout } from "./Layout";

// Criando um mock para Header.tsx
jest.mock("ui/components/Header", () => ({
  Header: jest.fn(() => <div>Mocked Header</div>),
}));

// Criando um mock para Footer.tsx
jest.mock("ui/components/Footer", () => ({
  Footer: jest.fn(() => <div>Mocked Footer</div>),
}));

describe("Layout", () => {
  test("a correct Layout render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout>
          <div>Teste</div>
        </Layout>
      </ThemeProvider>
    );

    const layoutRender = screen.getByText("Teste");

    expect(layoutRender).toBeInTheDocument();
  });
});
