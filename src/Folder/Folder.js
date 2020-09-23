import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

class Folder extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Link to={`/folder/${this.props.folderId}`}>
          Folder name: <b>{this.props.folder.name}</b>
        </Link>
      </div>
    );
  }
}

export default Folder;
