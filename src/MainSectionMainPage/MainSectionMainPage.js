import React, { Component } from "react";
import "./MainSectionMainPage.css";
import ListOfNotes from "../ListOfNotes/ListOfNotes";

class MainSectionMainPage extends Component {
  render() {
    return (
      <div className="mainSectionMainPage">
        <ListOfNotes />
      </div>
    );
  }
}

export default MainSectionMainPage;
