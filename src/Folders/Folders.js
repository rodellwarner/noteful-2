import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folders.css";

class Folders extends Component {
  render() {
    const arrayOfFolders = this.props.folders;

    const ListOfFolders = arrayOfFolders.map((folder, index) => {
      const folderId = folder.id;
      const folderPath = `/folder/${folderId}`;

      return (
        <div className={"folder"} key={index}>
          <Link to={folderPath}>
            Folder name: <b>{folder.name}</b>
          </Link>
        </div>
      );
    });

    // const folderIdOfTheFolderIWantToHighlight = this.props.folderId;

    // const folderToHighlight = arrayOfFolders.map((folder) => {
    //   if (folder.id === folderIdOfTheFolderIWantToHighlight) {
    //     console.log(folder.name);
    //   }
    // });

    return (
      <div className="folders">
        {ListOfFolders}
        <button className="addFolderButton">Add Folder</button>
      </div>
    );
  }
}

export default Folders;
