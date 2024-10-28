import { componentWithMockedProviders } from "@/mocks";
import { Category, Note } from "@/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Notes } from "./Notes";

const categories = [
  {
    id: 1,
    name: "Sample Note",
    noteList: [
      { id: 1, head: "Note 1", body: "Body" },
      { id: 2, head: "Note 2", body: "Body" },
      { id: 3, head: "Note 3", body: "Body" },
    ],
  },
];

jest.mock("@/utils", () => ({
  classNames: jest.fn(() => ""),
}));

describe("Notes Component", () => {
  const notes = categories[0].noteList;
  const component = (categories?: Category[], notes?: Note[]) =>
    componentWithMockedProviders(
      <Notes />,
      mockedNoteOptions,
      categories,
      notes
    );

  const mockedNoteOptions = {
    categories,
    notes,
    startNote: jest.fn(),
    searchNotes: jest.fn(),
    isAnyNoteSelected: false,

    selectNote: jest.fn(),
    isNoteSelected: jest.fn(),
    isEditingNote: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Notes correctly", () => {
    render(component());

    expect(screen.getByLabelText("notes")).toBeInTheDocument();
  });

  it("Renders list of notes", () => {
    render(component());

    expect(screen.getByLabelText("note list").childElementCount).toBe(
      notes.length
    );
  });

  it("Calls startNote when create note button is clicked", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("create note"));

    expect(mockedNoteOptions.startNote).toHaveBeenCalled();
  });

  it("Renders no notes", () => {
    const categories: Category[] = [
      { id: 1, name: "Empty Category", noteList: [] },
    ];
    render(component(categories, []));

    expect(screen.getByLabelText("no notes"));
  });
});
