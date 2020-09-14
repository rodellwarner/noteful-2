import React, { Component } from "react";
import "./NotesPageMainSection.css";
import Notes from "../Notes/Notes";

class NotesPageMainSection extends Component {
  render() {
    return (
      <div className="mainSection">
        <Notes notes={this.props.notes} />
      </div>
    );
  }
}

export default NotesPageMainSection;
