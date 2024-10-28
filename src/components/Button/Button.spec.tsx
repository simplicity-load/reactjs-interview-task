import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index"; // Adjust the path as necessary

describe("Button Component", () => {
  it("should render the correct label", () => {
    render(<Button label="Click Me" isRed icon="close" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });
  it("renders correctly without label", () => {
    render(<Button icon="delete" />);
    expect(screen.queryByText("Click Me")).not.toBeInTheDocument();
    // expect()
  });
  it("renders with correct icon", () => {
    render(<Button icon="save" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("DoneIcon")).toBeInTheDocument(); // Change this if the icon renders differently
  });
  it("applies red styles when isRed is true", () => {
    render(<Button label="Click Me" icon="close" isRed />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("red");
    expect(screen.getByTestId("DoneIcon")).toHaveClass("redIcon");
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" icon="plus" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
