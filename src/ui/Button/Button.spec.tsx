import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
  const options = {
    label: "Dummy",
    isRed: true,
    icon: "close" as "close",
  };
  it("Renders correctly and has label", () => {
    render(<Button {...options} label="Click Me" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("Calls onClick", () => {
    const handleClick = jest.fn();
    render(<Button {...options} onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
