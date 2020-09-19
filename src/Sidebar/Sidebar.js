import React, { Component } from "react";
import "./Sidebar.css";
import Folder from "../Folder/Folder";

class Sidebar extends Component {
  render() {
    const folders = this.props.folders;

    const highlight = this.props.folderId;

    const ListOfFolders = folders.map((folder, index) => {
      if (folder.id === highlight) {
        return (
          <Folder
            folderId={folder.id}
            folder={folder}
            key={index}
            class={"highlightedFolder"}
          />
        );
      } else
        return (
          <Folder
            folderId={folder.id}
            folder={folder}
            key={index}
            class={"folder"}
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
