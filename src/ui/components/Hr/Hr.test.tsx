import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { Hr } from "./Hr";

describe("Hr", () => {
  test("a correct Hr render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hr />
      </ThemeProvider>
    );

    const hrRender = screen.getByTestId("Hr");

    expect(hrRender).toBeInTheDocument();
  });

  test("a correct Hr render with margin", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hr isMargin />
      </ThemeProvider>
    );

    const hrRender = screen.getByTestId("Hr");

    expect(hrRender).toBeInTheDocument();
  });
});
