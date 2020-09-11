import React, { Component } from "react";
import "./SidebarMainPage.css";
import ListOfFolders from "../ListOfFolders/ListOfFolders";

class SidebarMainPage extends Component {
  render() {
    return (
      <div className="sidebarMainPage">
        <ListOfFolders
          folders={this.props.folders}
          folderId={this.props.folderId}
        />
      </div>
    );
  }
}

export default SidebarMainPage;
