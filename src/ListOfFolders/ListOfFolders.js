import React, { Component } from "react";
import "./ListOfFolders.css";
import Folder from "../Folder/Folder";

class ListOfFolders extends Component {
  render() {
    const arrayOfFolders = this.props.folders;
    console.log(this.props.folderId);

    const ListOfFolders = arrayOfFolders.map((folder, index) => {
      return <Folder folder={folder} key={index} index={index} />;
    });

    return (
      <div className="listOfFolders">
        {ListOfFolders}
        <button className="addFolderButton">Add Folder</button>
      </div>
    );
  }
}

export default ListOfFolders;
