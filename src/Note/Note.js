import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  render() {
    const dateModified = this.props.note.modified;
    const slicedDate = dateModified.slice(0, 10);
    const dateWithText = new Date(slicedDate);
    const properDate = dateWithText.setDate(dateWithText.getDate() + 1);
    const properDateWithText = new Date(properDate);
    const properDateWithTextString = properDateWithText.toString();
    const properDateWithTextStringSliced = properDateWithTextString.slice(
      4,
      16
    );

    return (
      <div className="note">
        <p className="noteTitle">
          <b>Note {this.props.index + 1}</b>
        </p>
        Name: <b>{this.props.note.name}</b>
        <br></br> Date modified: <b>{properDateWithTextStringSliced}</b>
        <button className="deleteNoteButton">Delete Note</button>
      </div>
    );
  }
}

export default Note;
