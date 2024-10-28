import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Note } from "./types";

const initialState: Category[] = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.push(action.payload);
    },
    addNote(state, action: PayloadAction<{ categoryId: number; note: Note }>) {
      const { categoryId, note } = action.payload;
      const category = state.find((cat) => cat.id === categoryId);
      if (category) {
        category.noteList.push(note);
      }
    },
    editNote(state, action: PayloadAction<{ categoryId: number; note: Note }>) {
      const { categoryId, note: editedNote } = action.payload;
      const category = state.find((cat) => cat.id === categoryId);
      if (category) {
        const noteIndex = category.noteList.findIndex(
          (note) => note.id === editedNote.id
        );
        if (noteIndex !== -1) {
          category.noteList[noteIndex] = editedNote;
        }
      }
    },
    deleteNote(
      state,
      action: PayloadAction<{ categoryId: number; noteId: number }>
    ) {
      const { categoryId, noteId } = action.payload;
      const category = state.find((cat) => cat.id === categoryId);
      if (category) {
        category.noteList = category.noteList.filter(
          (note) => note.id !== noteId
        );
      }
    },
  },
});

export const { addCategory, addNote, editNote, deleteNote } =
  categoriesSlice.actions;

export const { reducer } = categoriesSlice;
