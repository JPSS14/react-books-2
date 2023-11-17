import { screen, render } from "@testing-library/react";
import { Loading } from "./Loading";
import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/theme-default";

describe("Loading component", () => {
  test("a correct loading render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );

    const loadingRender = screen.getByTestId("loading-component");

    expect(loadingRender).toBeInTheDocument();
  });
});
