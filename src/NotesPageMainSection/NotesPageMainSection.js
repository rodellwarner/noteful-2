import React, { Component } from "react";
import "./NotesPageMainSection.css";
import Notes from "../Notes/Notes";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class NotesPageMainSection extends Component {
  static contextType = NotesAndFoldersContext;

  render() {
    const noteId = this.props.noteId;

    const notes = this.context.notes.filter((note) => {
      return note.id === noteId;
    });

    return (
      <div className="mainSection">
        <Notes notes={notes} />
      </div>
    );
  }
}

export default NotesPageMainSection;
