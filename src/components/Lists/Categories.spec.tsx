import { componentWithMockedProviders } from "@/mocks";
import { Category } from "@/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Categories } from "./Categories";

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
  const component = (categories?: Category[]) =>
    componentWithMockedProviders(<Categories />, mockedNoteOptions, categories);

  const mockedNoteOptions = {
    categories,
    isCreatingCategory: false,
    startCategoryCreation: jest.fn(),

    selectCategory: jest.fn(),
    isCategorySelected: jest.fn(),
    isCreatingNote: false,
    isEditingNote: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Categories correctly", () => {
    render(component());

    expect(screen.getByLabelText("categories")).toBeInTheDocument();
  });

  it("Renders list of categories", () => {
    const categories = [
      { id: 1, name: "C1", noteList: [] },
      { id: 2, name: "C2", noteList: [] },
      { id: 3, name: "C3", noteList: [] },
      { id: 4, name: "C4", noteList: [] },
    ];
    render(component(categories));

    expect(screen.getByLabelText("category list").childElementCount).toBe(
      categories.length
    );
  });

  it("Renders no categories", () => {
    const categories: Category[] = [];
    render(component(categories));

    expect(screen.getByLabelText("no categories"));
  });

  it("Calls startCategoryCreation when create category button is clicked", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("create category"));

    expect(mockedNoteOptions.startCategoryCreation).toHaveBeenCalled();
  });
});
