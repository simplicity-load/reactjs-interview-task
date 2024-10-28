import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "./index";

describe("Search Component", () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with placeholder", () => {
    render(<Search placeholder="Search..." onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  it("calls onSearch with the correct value on input change", () => {
    render(<Search placeholder="Search..." onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "test" } });
    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });

  it("does not call onSearch if input is empty", () => {
    render(<Search placeholder="Search..." onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "" } });
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
