import React from "react";

const NotesAndFoldersContext = React.createContext({
  folders: [],
  notes: [],
  deleteNote: () => {},
});

export default NotesAndFoldersContext;
