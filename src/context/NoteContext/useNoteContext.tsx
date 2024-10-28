import {
  addCategory,
  addNote,
  Category,
  editNote,
  Note,
  deleteNote as removeNote,
  useTypedSelector,
} from "@/store";
import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";

type EditingNote = Omit<Note, "id">;

export interface Context {
  categories: Category[];
  notes?: Note[];
  editingNote?: EditingNote;

  isCreatingCategory: boolean;
  startCategoryCreation: () => void;
  changeCategoryCreation: (name: string) => void;
  submitCategoryCreation: () => void;
  cancelCategoryCreation: () => void;

  selectCategory: (categoryId: number) => void;
  isCategorySelected: (categoryId: number) => boolean;
  isAnyCategorySelected: boolean;

  isCreatingNote: boolean;
  isEditingNote: boolean;
  startNote: () => void;
  changeNote: (note: EditingNote) => void;
  submitNote: () => void;
  deleteNote: () => void;

  searchNotes: (search: string) => void;
  selectNote: (note: Note) => void;
  isNoteSelected: (noteId: number) => boolean;
  isAnyNoteSelected: boolean;
}

const NoteContext = createContext<Context | undefined>(undefined);

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context)
    throw new Error(
      "useNoteContext should be used only inside a NoteContextProvider."
    );
  return context;
};

interface P {
  children: JSX.Element;
}

interface State {
  selection: {
    categoryId: number;
    noteId: number;
  };
  noteCreation?: EditingNote;
  categoryCreation?: Omit<Category, "id" | "noteList">;
  search: string;
}

export const NoteContextProvider = ({ children }: P) => {
  const [state, setState] = useState<State>({
    selection: {
      categoryId: 0,
      noteId: 0,
    },
    noteCreation: undefined,
    categoryCreation: undefined,
    search: "",
  });

  const dispatch = useDispatch();
  const categories = useTypedSelector((state) => state.categories);

  const selectCategory = (categoryId: number) => {
    if (isCreatingNote || isEditingNote) return;
    setState((prev) => ({
      ...prev,
      selection: {
        categoryId: prev.selection.categoryId === categoryId ? 0 : categoryId,
        noteId: 0,
      },
    }));
    cancelCategoryCreation();
  };

  const isCategorySelected = (categoryId: number) =>
    state.selection.categoryId === categoryId;

  const isAnyCategorySelected = state.selection.categoryId !== 0;

  const isCreatingCategory = Boolean(state.categoryCreation);

  const startCategoryCreation = () => {
    setState((prev) => ({
      ...prev,
      categoryCreation: {
        name: "",
      },
    }));
  };

  const changeCategoryCreation = (name: string) => {
    setState((prev) => ({
      ...prev,
      categoryCreation: {
        name,
      },
    }));
  };

  const submitCategoryCreation = () => {
    if (state.categoryCreation === undefined) return;
    setState((prev) => ({
      ...prev,
      categoryCreation: undefined,
    }));
    dispatch(
      addCategory({
        id: Math.random(),
        name: state.categoryCreation.name,
        noteList: [],
      })
    );
  };

  const cancelCategoryCreation = () => {
    setState((prev) => ({
      ...prev,
      categoryCreation: undefined,
    }));
  };

  const selectNote = ({ id: noteId, head, body }: Note) => {
    if (isEditingNote) return;
    setState((prev) => {
      if (prev.selection.noteId === noteId)
        return {
          ...prev,
          selection: {
            ...prev.selection,
            noteId: 0,
          },
          noteCreation: undefined,
        };
      return {
        ...prev,
        selection: {
          ...prev.selection,
          noteId,
        },
        noteCreation: {
          head,
          body,
        },
      };
    });
  };

  const isNoteSelected = (noteId: number) => state.selection.noteId === noteId;

  const isAnyNoteSelected = state.selection.noteId !== 0;

  const isCreatingNote = Boolean(state.noteCreation) && !isAnyNoteSelected;

  const startNote = () => {
    setState((prev) => ({
      ...prev,
      selection: {
        ...prev.selection,
        noteId: 0,
      },
      noteCreation: {
        head: "",
        body: "",
      },
    }));
  };

  const changeNote = ({ head, body }: EditingNote) => {
    setState((prev) => ({
      ...prev,
      noteCreation: {
        head,
        body,
      },
    }));
  };

  const submitNote = () => {
    if (state.noteCreation === undefined) return;
    setState((prev) => ({
      ...prev,
      selection: {
        ...prev.selection,
        noteId: 0,
      },
      noteCreation: undefined,
    }));

    const { head, body } = state.noteCreation;
    const { categoryId, noteId } = state.selection;
    dispatch(
      state.selection.noteId !== 0
        ? editNote({
            categoryId,
            note: {
              id: noteId,
              head,
              body,
            },
          })
        : addNote({
            categoryId,
            note: {
              id: Math.random(),
              head,
              body,
            },
          })
    );
  };

  const deleteNote = () => {
    setState((prev) => ({
      ...prev,
      selection: {
        ...prev.selection,
        noteId: 0,
      },
      noteCreation: undefined,
    }));
    dispatch(
      removeNote({
        ...state.selection,
      })
    );
  };

  const searchNotes = (search: string) => {
    setState((prev) => ({
      ...prev,
      search,
    }));
  };

  const notes = categories
    .find((category) => category.id === state.selection.categoryId)
    ?.noteList.filter((note) =>
      state.search
        ? note.head.toLowerCase().includes(state.search.toLowerCase())
        : true
    );

  const areNotesEqual = (x?: EditingNote, y?: EditingNote) => {
    return Object.entries(x ?? {}).some(
      ([k, v]) =>
        // @ts-expect-error no index signature
        v !== y?.[k]
    );
  };

  const editingNote = state.noteCreation;
  const isEditingNote =
    isAnyNoteSelected &&
    areNotesEqual(
      state.noteCreation,
      notes?.find((note) => note.id === state.selection.noteId)
    );

  return (
    <NoteContext.Provider
      value={{
        categories,
        notes,
        editingNote,

        isCreatingCategory,
        startCategoryCreation,
        changeCategoryCreation,
        submitCategoryCreation,
        cancelCategoryCreation,

        selectCategory,
        isCategorySelected,
        isAnyCategorySelected,

        isCreatingNote,
        isEditingNote,
        startNote,
        changeNote,
        submitNote,
        deleteNote,

        searchNotes,
        selectNote,
        isNoteSelected,
        isAnyNoteSelected,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

interface MP extends P {
  context: Context;
}

export const MockNoteProvider = ({ children, context }: MP) => (
  <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
);
