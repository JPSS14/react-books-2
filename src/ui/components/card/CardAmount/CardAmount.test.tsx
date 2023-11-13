import { render, screen } from "@testing-library/react";
import { CardAmount } from "./CardAmount";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";

describe("CardAmount", () => {
  test("a correct CardAmount render", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardAmount price="R$ 45,50" />
      </ThemeProvider>
    );

    const renderCardAmount = screen.getByText("R$ 45,50");

    expect(renderCardAmount).toBeInTheDocument();
  });

  test("a undefined price CardAmount render", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardAmount />
      </ThemeProvider>
    );

    const renderCardAmount = screen.getByText("Indisponível");

    expect(renderCardAmount).toBeInTheDocument();
  });
});
