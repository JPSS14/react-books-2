import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { Input } from "./Input";

describe("Input", () => {
  test("a correct Input render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input label="Test" />
      </ThemeProvider>
    );
    const inputRender = screen.getByLabelText("Test");

    expect(inputRender).toBeInTheDocument();
  });
});
