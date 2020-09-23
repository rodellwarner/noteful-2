import React, { Component } from "react";
import "./MainPage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";

class MainPage extends Component {
  render() {
    const folderId = this.props.match.params.folderId;
    return (
      <div className="mainPage">
        <Header />
        <Sidebar folderId={folderId} />
        <MainSection folderId={folderId} />
      </div>
    );
  }
}

export default MainPage;
