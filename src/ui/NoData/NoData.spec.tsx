
import { render, screen } from "@testing-library/react";
import { NoData } from "./index";
import styles from "./nodata.module.css";

describe("NoData component", () => {
  it("renders correctly", () => {
    const labelText = "No data available";

    render(<NoData label={labelText} />);

    const noDataElement = screen.getByText(labelText);

    expect(noDataElement).toBeInTheDocument();
    expect(noDataElement).toHaveClass(styles.nodata);
  });
});
