import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

class Folder extends Component {
  render() {
    const folderId = this.props.folder.id;
    const folderPath = `/folder/${folderId}`;

    return (
      <div className="folder">
        <Link to={folderPath}>
          Folder name: <b>{this.props.folder.name}</b>
        </Link>
      </div>
    );
  }
}

export default Folder;
