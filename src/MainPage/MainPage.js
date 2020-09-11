import React, { Component } from "react";
import "./MainPage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <Header />
        <Sidebar
          folders={this.props.folders}
          folderId={this.props.match.params.folderId}
        />
        <MainSection notes={this.props.notes} />
      </div>
    );
  }
}

export default MainPage;
