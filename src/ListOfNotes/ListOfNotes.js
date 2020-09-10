import React, { Component } from "react";
import "./ListOfNotes.css";
import STORE from "../dummy-store";

class ListOfNotes extends Component {
  render() {
    const arrayOfNotes = STORE.notes;

    const listOfNotes = arrayOfNotes.map((note, index) => {
      return <p key={index}>{note.name}</p>;
    });

    return <div className="listOfNotes">{listOfNotes}</div>;
  }
}

export default ListOfNotes;
