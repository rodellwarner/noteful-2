import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

class Folder extends Component {
  render() {
    return (
      <Link to={`/folder/${this.props.folderId}`}>
        <div className={this.props.className}>
          Folder name: <b>{this.props.folder.name}</b>
        </div>
      </Link>
    );
  }
}

export default Folder;
