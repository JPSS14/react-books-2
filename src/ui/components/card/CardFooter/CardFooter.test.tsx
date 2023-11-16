import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { CardFooter } from "./CardFooter";

describe("CardFooter test", () => {
  test("a correct CardFooter render", () => {
    const mockPublisher = "Marvel";
    render(
      <ThemeProvider theme={theme}>
        <CardFooter publisher={mockPublisher} />
      </ThemeProvider>
    );

    const renderCardFooter = screen.getByText("Editora: Marvel");

    expect(renderCardFooter).toBeInTheDocument();
  });
});
