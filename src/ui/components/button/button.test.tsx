import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("button test", () => {
  test("renders the button with the correct text", () => {
    const mockProps = {
      children: "Button",
      onClick: jest.fn(),
      disabled: true,
    };

    render(<Button {...mockProps} />);
    const renderButton = screen.getByText("Button");

    expect(renderButton).toBeInTheDocument();
    expect(renderButton).toHaveAttribute("disabled");
  });
});
