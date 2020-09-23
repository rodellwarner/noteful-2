import React, { Component } from "react";
import "./Sidebar.css";
import Folder from "../Folder/Folder";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class Sidebar extends Component {
  static contextType = NotesAndFoldersContext;
  render() {
    const folders = this.context.folders;

    const highlight = this.props.folderId;

    const ListOfFolders = folders.map((folder, index) => {
      if (folder.id === highlight) {
        return (
          <Folder
            folderId={folder.id}
            folder={folder}
            key={index}
            className={"highlightedFolder"}
          />
        );
      } else
        return (
          <Folder
            folderId={folder.id}
            folder={folder}
            key={index}
            className={"folder"}
          />
        );
    });

    return (
      <div className="sidebar">
        <div className="folders">
          {ListOfFolders}
          <button className="addFolderButton">Add Folder</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
