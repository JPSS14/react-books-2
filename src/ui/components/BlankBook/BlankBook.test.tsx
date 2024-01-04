import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { BlankBook } from "./BlankBook";

describe("BlankBook component", () => {
  test("a correct BlankBook render", () => {
    render(
      <ThemeProvider theme={theme}>
        <BlankBook />
      </ThemeProvider>
    );

    const blankBookRender = screen.getByText("Sem imagem");

    expect(blankBookRender).toBeInTheDocument();
  });
});
