import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Notes.css";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

function deleteNoteRequest(noteId, callback) {
  console.log("URL: ", `http://localhost:9090/notes/${noteId}`);
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: "DELETE",
  })
    .then((results) => {
      if (!results.ok) {
        return results.json().then((error) => {
          throw error;
        });
      }
      return results.json();
    })
    .then((data) => {
      callback(noteId);
    })
    .catch((error) => {
      console.error(error);
    });
  if (window.location.href.indexOf("note") > -1) {
    window.location.replace("http://localhost:3000/");
  }
}

class Notes extends Component {
  static contextType = NotesAndFoldersContext;

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
      const noteNumber = index + 1;

      return (
        <div key={index} className="note" id="nameLink">
          <p className="noteTitle">
            <Link to={notePath}>
              <b>Note {noteNumber}</b>
            </Link>
          </p>
          Name: <b>{note.name}</b>
          <br></br> Date modified: <b>{properDateWithTextStringSliced}</b>
          <button
            className="deleteNoteButton"
            onClick={() => deleteNoteRequest(note.id, this.context.deleteNote)}
          >
            Delete Note
          </button>
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
