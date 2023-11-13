import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/theme/theme-default";
import { CardFooter } from "./card-footer";

describe("CardFooter test", () => {
  test("a correct CardFooter render", () => {
    const mockPublishedDate = "25/11/2019";
    render(
      <ThemeProvider theme={theme}>
        <CardFooter publishedDate={mockPublishedDate} />
      </ThemeProvider>
    );

    const renderCardFooter = screen.getByText("Publicado: 25/11/2019");

    expect(renderCardFooter).toBeInTheDocument();
  });
});
