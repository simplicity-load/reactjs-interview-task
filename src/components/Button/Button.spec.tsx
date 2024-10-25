import { render, screen } from "@testing-library/react";
import { Button } from "./index"; // Adjust the path as necessary

describe("Button Component", () => {
  it("should render the button with the correct label", () => {
    render(<Button label="Click Me" isRed />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });
});
