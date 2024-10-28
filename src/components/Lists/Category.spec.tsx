import { componentWithMockedProviders } from "@/mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { Category } from "./Category";

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

describe("Category Component", () => {
  const category = categories[0];
  const component = () =>
    componentWithMockedProviders(
      <Category category={category} />,
      mockedNoteOptions
    );

  const mockedNoteOptions = {
    categories,
    selectCategory: jest.fn(),
    isCategorySelected: jest.fn(),
    isCreatingNote: false,
    isEditingNote: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Category correctly", () => {
    render(component());

    expect(screen.getByLabelText("category")).toBeInTheDocument();
  });

  it("Calls selectCategory with ID when component is clicked", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("category"));

    expect(mockedNoteOptions.selectCategory).toHaveBeenCalledWith(category.id);
  });
});
