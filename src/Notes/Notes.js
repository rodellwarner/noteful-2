import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

class Notes extends Component {
  render() {
    const arrayOfNotes = this.props.notes;

    const listOfNotes = arrayOfNotes.map((note, index) => {
      const dateModified = note.modified;
      const slicedDate = dateModified.slice(0, 10);
      const dateWithText = new Date(slicedDate);
      const properDate = dateWithText.setDate(dateWithText.getDate() + 1);
      const properDateWithText = new Date(properDate);
      const properDateWithTextString = properDateWithText.toString();
      const properDateWithTextStringSliced = properDateWithTextString.slice(
        4,
        16
      );

      const noteId = note.id;
      const notePath = `/note/${noteId}`;

      return (
        <div key={index} className="note" id="nameLink">
          <p className="noteTitle">
            <Link to={notePath}>
              <b>Note {index + 1}</b>
            </Link>
          </p>
          Name: <b>{note.name}</b>
          <br></br> Date modified: <b>{properDateWithTextStringSliced}</b>
          <button className="deleteNoteButton">Delete Note</button>
        </div>
      );
    });

    return (
      <div className="notes">
        {listOfNotes}
        <button className="addNoteButton">Add Note</button>
      </div>
    );
  }
}

export default Notes;
