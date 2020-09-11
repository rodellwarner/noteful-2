import React, { Component } from "react";
import "./MainSection.css";
import Notes from "../Notes/Notes";

class MainSection extends Component {
  render() {
    return (
      <div className="mainSection">
        <Notes notes={this.props.notes} />
      </div>
    );
  }
}

export default MainSection;
