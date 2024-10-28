import { componentWithMockedProviders } from "@/mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

const categories = [
  {
    id: 1,
    name: "Sample Category",
    noteList: [{ id: 1, head: "Note", body: "Body" }],
  },
];

describe("Form Component", () => {
  const component = () =>
    componentWithMockedProviders(<Form />, mockedNoteOptions);

  const note = categories[0].noteList[0];

  const mockedNoteOptions = {
    editingNote: note,
    changeNote: jest.fn(),
    submitNote: jest.fn(),
    deleteNote: jest.fn(),
    isCreatingNote: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Form correctly", () => {
    render(component());

    expect(screen.getByLabelText("form")).toBeInTheDocument();
  });

  it("Calls changeNote when the title is updated", () => {
    render(component());

    const value = "New Title";
    const titleInput = screen.getByLabelText("input title");
    fireEvent.change(titleInput, { target: { value } });
    expect(mockedNoteOptions.changeNote).toHaveBeenCalledWith({
      ...note,
      head: value,
    });
  });

  it("Calls changeNote when the body is updated", () => {
    render(component());

    const value = "New Body";
    const bodyInput = screen.getByLabelText("input body");
    fireEvent.change(bodyInput, { target: { value } });
    expect(mockedNoteOptions.changeNote).toHaveBeenCalledWith({
      ...note,
      body: value,
    });
  });

  it("Calls submitNote when save button is clicked", () => {
    render(component());

    const saveButton = screen.getByLabelText("save changes");
    fireEvent.click(saveButton);
    expect(mockedNoteOptions.submitNote).toHaveBeenCalled();
  });

  it("Calls deleteNote when delete button is clicked", () => {
    render(component());

    const deleteButton = screen.getByLabelText("delete note");
    fireEvent.click(deleteButton);
    expect(mockedNoteOptions.deleteNote).toHaveBeenCalled();
  });
});
