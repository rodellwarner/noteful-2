import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folders.css";

class Folders extends Component {
  render() {
    const arrayOfFolders = this.props.folders;
    console.log(this.props.folderId);

    const ListOfFolders = arrayOfFolders.map((folder, index) => {
      const folderId = folder.id;
      const folderPath = `/folder/${folderId}`;
      return (
        <div className="folder" key={index}>
          <Link to={folderPath}>
            Folder name: <b>{folder.name}</b>
          </Link>
        </div>
      );
    });

    return (
      <div className="folders">
        {ListOfFolders}
        <button className="addFolderButton">Add Folder</button>
      </div>
    );
  }
}

export default Folders;
