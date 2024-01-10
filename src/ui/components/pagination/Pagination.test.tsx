import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination component", () => {
  test("a correct pagination render", () => {
    render(<Pagination />);

    const paginationRender = screen.getByTestId("Pagination");

    expect(paginationRender).toBeInTheDocument();
  });
});
