import React, { Component } from "react";
import "./ListOfNotes.css";
import Note from "../Note/Note";

class ListOfNotes extends Component {
  render() {
    const arrayOfNotes = this.props.notes;

    const listOfNotes = arrayOfNotes.map((note, index) => {
      return <Note note={note} key={index} index={index} />;
    });

    return (
      <div className="listOfNotes">
        {listOfNotes}
        <button className="addNoteButton">Add Note</button>
      </div>
    );
  }
}

export default ListOfNotes;
