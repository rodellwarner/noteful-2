import React, { Component } from "react";
import "./MainPage.css";
import Header from "../Header/Header";
import SidebarMainPage from "../SidebarMainPage/SidebarMainPage";
import MainSectionMainPage from "../MainSectionMainPage/MainSectionMainPage";

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <Header />
        <SidebarMainPage />
        <MainSectionMainPage notes={this.props.notes} />
      </div>
    );
  }
}

export default MainPage;
