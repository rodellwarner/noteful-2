import React, { Component } from "react";
import "./Sidebar.css";
import Folders from "../Folders/Folders";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Folders folders={this.props.folders} folderId={this.props.folderId} />
      </div>
    );
  }
}

export default Sidebar;
