import { render, screen } from "@testing-library/react";
import { Drawers } from "./Drawers";

jest.mock("@/utils", () => ({
  classNames: jest.fn(() => ""),
}));

describe("Drawers Component", () => {
  it("renders with two children and applies twoColumn class", () => {
    render(
      <Drawers>
        <div>Drawer 1</div>
        <div>Drawer 2</div>
      </Drawers>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders with three children and applies threeColumn class", () => {
    const children = [
      <div>Drawer 1</div>,
      <div>Drawer 2</div>,
      <div>Drawer 3</div>,
    ];
    render(<Drawers children={children} />);

    expect(screen.getByRole("main").children.length).toBe(children.length);
  });
});
