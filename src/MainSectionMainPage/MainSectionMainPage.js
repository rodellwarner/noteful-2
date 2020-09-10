import React, { Component } from "react";
import "./MainSectionMainPage.css";
import ListOfNotes from "../ListOfNotes/ListOfNotes";

class MainSectionMainPage extends Component {
  render() {
    return (
      <div className="mainSectionMainPage">
        <ListOfNotes notes={this.props.notes} />
      </div>
    );
  }
}

export default MainSectionMainPage;
