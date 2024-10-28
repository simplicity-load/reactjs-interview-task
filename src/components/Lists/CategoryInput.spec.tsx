import { componentWithMockedProviders } from "@/mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { CategoryInput } from "./CategoryInput";

const categories = [
  {
    id: 1,
    name: "Sample Category",
    noteList: [{ id: 1, head: "Note", body: "Body" }],
  },
];

jest.mock("@/utils", () => ({
  classNames: jest.fn(() => ""),
}));

describe("Categories Component", () => {
  const component = () =>
    componentWithMockedProviders(<CategoryInput />, mockedNoteOptions);

  const mockedNoteOptions = {
    categories,
    changeCategoryCreation: jest.fn(),
    submitCategoryCreation: jest.fn(),
    cancelCategoryCreation: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders CategoryInput correctly", () => {
    render(component());

    expect(screen.getByLabelText("input category name")).toBeInTheDocument();
  });

  it("Calls cancelCategoryCreation when canceling category", () => {
    render(component());

    fireEvent.change(screen.getByLabelText("change category"), {
      target: { value: "Name" },
    });

    expect(mockedNoteOptions.changeCategoryCreation).toHaveBeenCalledWith(
      "Name"
    );
  });

  it("Calls submitCategoryCreation when submitting category", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("save category"));

    expect(mockedNoteOptions.submitCategoryCreation).toHaveBeenCalled();
  });

  it("Calls cancelCategoryCreation when canceling category", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("cancel category"));

    expect(mockedNoteOptions.cancelCategoryCreation).toHaveBeenCalled();
  });
});
