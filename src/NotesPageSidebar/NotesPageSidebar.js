import React, { Component } from "react";
import "./NotesPageSidebar.css";
import Folder from "../Folder/Folder";

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

    return (
      <div className="notesPageSidebar">
        {console.log("Folder To Display: ", folderToDisplay)}
        <div className="folders">
          <Folder
            folder={folderToDisplay[0]}
            folderId={folderIdOfSelectedNote}
            class={"folder"}
          />
          <button className="addFolderButton">Add Folder</button>
        </div>
      </div>
    );
  }
}

export default NotesPageSidebar;
