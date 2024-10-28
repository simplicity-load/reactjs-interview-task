import { NoteContextProvider } from "@/context";
import { store } from "@/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { App } from "./App";

describe("App Component", () => {
  const newStore = () => store;
  const component = () => (
    <Provider store={newStore()}>
      <NoteContextProvider>
        <App />
      </NoteContextProvider>
    </Provider>
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders Correctly", () => {
    render(component());

    expect(screen.getByLabelText("app"));
  });

  const createCategory = (categoryName: string) => {
    fireEvent.click(screen.getByLabelText("create category"));

    fireEvent.change(screen.getByLabelText("change category"), {
      target: { value: categoryName },
    });
    fireEvent.click(screen.getByLabelText("save category"));
  };

  it("Create category", () => {
    render(component());

    const categoryName = "Test category";
    createCategory(categoryName);

    expect(
      screen.getByText(categoryName, { exact: false })
    ).toBeInTheDocument();
  });

  const createNote = (title: string, body: string) => {
    fireEvent.click(screen.getByLabelText("create note"));

    fireEvent.change(screen.getByLabelText("input title"), {
      target: { value: title },
    });
    fireEvent.change(screen.getByLabelText("input body"), {
      target: { value: body },
    });

    fireEvent.click(screen.getByLabelText("save changes"));
  };
});
