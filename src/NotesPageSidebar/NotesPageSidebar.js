import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotesPageSidebar.css";
import Folder from "../Folder/Folder";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class NotesPageSidebar extends Component {
  static contextType = NotesAndFoldersContext;
  render() {
    // const noteId = this.props.notes[0].id;
    const noteId = this.props.noteId;

    const noteRelatedToFolderToDisplay = this.context.notes.filter(
      (note) => note.id === noteId
    );

    const folderIdOfSelectedNote = noteRelatedToFolderToDisplay[0].folderId;

    const folderToDisplay = this.context.folders.filter(
      (folder) => folder.id === folderIdOfSelectedNote
    );

    return (
      <div className="notesPageSidebar">
        <div className="folders">
          <Folder
            folder={folderToDisplay[0]}
            folderId={folderIdOfSelectedNote}
            className={"folder"}
          />
          <Link to="/add-folder">
            <button className="addFolderButton">Add Folder</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotesPageSidebar;
