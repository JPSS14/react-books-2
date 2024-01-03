import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NotFoundError } from "./NotFoundError";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";

describe("NotFoundError", () => {
  test("a correct NotFoundError render", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <NotFoundError />
        </MemoryRouter>
      </ThemeProvider>
    );

    const notFoundErrorRender = screen.getByText("Ops... veja bem...");
    const buttonToHome = screen.getByRole("button", { name: /Voltar/ });

    expect(notFoundErrorRender).toBeInTheDocument();
    expect(buttonToHome).toBeInTheDocument();
    fireEvent.click(buttonToHome);
  });
});
