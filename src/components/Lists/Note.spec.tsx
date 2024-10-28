import { componentWithMockedProviders } from "@/mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { Note } from "./Note";

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

describe("Note Component", () => {
  const note = categories[0].noteList[0];

  const component = () =>
    componentWithMockedProviders(<Note note={note} />, mockedNoteOptions);

  const mockedNoteOptions = {
    categories,
    selectNote: jest.fn(),
    isNoteSelected: jest.fn(),
    isEditingNote: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Note correctly", () => {
    render(component());

    expect(screen.getByLabelText("note")).toBeInTheDocument();
  });

  it("Calls selectNote with ID when component is clicked", () => {
    render(component());

    fireEvent.click(screen.getByLabelText("note"));

    expect(mockedNoteOptions.selectNote).toHaveBeenCalled();
  });
});
