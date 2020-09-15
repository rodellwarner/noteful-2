import React, { Component } from "react";
import "./Sidebar.css";
import Folder from "../Folder/Folder";

class Sidebar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { selectedFolder: [] };
  // }

  render() {
    const folders = this.props.folders;

    // const folderIdOfTheFolderIWantToHighlight = this.props.folderId;

    // const folderToHighlight = folders.filter((folder) => {
    //   if (folder.id === folderIdOfTheFolderIWantToHighlight) {
    //     return folder;
    //   } else return null;
    // });

    const highlight = this.props.folderId;
    console.log("Highlight: ", highlight);

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
