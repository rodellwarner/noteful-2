import React, { Component } from "react";
import "./NotesPageSidebar.css";
import Folders from "../Folders/Folders";

class NotesPageSidebar extends Component {
  render() {
    const noteId = this.props.notes[0].id;

    const noteRelatedToFolderToDisplay = this.props.allNotes.filter(
      (note) => note.id === noteId
    );

    const folderIdOfSelectedNote = noteRelatedToFolderToDisplay[0].folderId;

    const folderToDisplay = this.props.folders.filter(
      (folder) => folder.id === folderIdOfSelectedNote
    );

    // const folderToDisplayAsObject = folderToDisplay[0];

    return (
      <div className="notesPageSidebar">
        <Folders folders={folderToDisplay} />
      </div>
    );
  }
}

export default NotesPageSidebar;
