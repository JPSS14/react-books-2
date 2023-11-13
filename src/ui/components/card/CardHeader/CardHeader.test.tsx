import { render, screen } from "@testing-library/react";
import { CardHeader } from "./CardHeader";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";

describe("card header test", () => {
  test("renders the CardHeader with the correct title", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardHeader title="Test CardHeader" />
      </ThemeProvider>
    );

    const renderCardHeader = screen.getByText("Test CardHeader");

    expect(renderCardHeader).toBeInTheDocument();
  });
});
