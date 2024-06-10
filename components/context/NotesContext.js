import { createContext, useReducer } from "react";
import { NOTES, TRASH } from "../../data/dummy-data";

const initialState = {
  notes: NOTES,
  trash: TRASH,
};

function notesReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const id = "n" + Math.random().toString();
      return { ...state, notes: [{ ...action.data, id }, ...state.notes] };
    case 'EDIT_NOTE':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.data.id ? { ...note, ...action.data } : note
        ),
      };
    case 'DELETE_NOTE':
      const filteredNotes = state.notes.filter((note) => note.id !== action.data.id);
      return { ...state, notes: filteredNotes, trash: [...state.trash, action.data] };
    case 'RESTORE_NOTE':
      const restoredNotes = state.trash.filter((note) => note.id !== action.data.id);
      return {
        ...state,
        notes: [...state.notes, action.data],
        trash: restoredNotes,
      };
    case 'RESTORE_ALL_NOTES': // Add new case for restoring all notes
      return { ...state, notes: [...state.notes, ...state.trash], trash: [] };
    case 'DELETE_ALL_PERMANENTLY': // Add new case for permanent deletion
      return { ...state, trash: [] };
    case 'EMPTY_TRASH':
      return { ...state, trash: [] };
    default:
      return state;
  }
}

export const NotesContext = createContext(initialState);

function NotesContextProvider({ children }) {
  const [notesState, dispatch] = useReducer(notesReducer, initialState);

  function addNote(noteData) {
    dispatch({ type: 'ADD_NOTE', data: noteData });
  }

  function deleteNote(id) {
    dispatch({ type: 'DELETE_NOTE', data: id });
  }

  function editNote(id, noteData) {
    dispatch({ type: 'EDIT_NOTE', data: { id, ...noteData } });
  }

  function restoreNote(id) {
    dispatch({ type: 'RESTORE_NOTE', data: id });
  }

  function restoreAllNotes() { // Implement restore all notes functionality
    dispatch({ type: 'RESTORE_ALL_NOTES' });
  }

  function deleteAllNotes() { // Implement delete all permanently functionality
    dispatch({ type: 'DELETE_ALL_PERMANENTLY' });
  }

  function emptyTrash() {
    dispatch({ type: 'EMPTY_TRASH' });
  }

  const value = {
    notes: notesState.notes,
    trash: notesState.trash,
    addNote,
    deleteNote,
    editNote,
    restoreNote,
    restoreAllNotes, 
    deleteAllNotes, 
    emptyTrash,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export default NotesContextProvider;