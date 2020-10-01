import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainSection.css";
import Notes from "../Notes/Notes";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class MainSection extends Component {
  static contextType = NotesAndFoldersContext;
  render() {
    const folderId = this.props.folderId;

    const notesInFolder = this.context.notes.filter((note) => {
      if (!folderId) {
        return note;
      } else return note.folderId === folderId;
    });

    return (
      <div className="mainSection">
        <Link to="/add-note">
          <button className="addNoteButton">Add Note</button>
        </Link>
        <Notes notes={notesInFolder} />
      </div>
    );
  }
}

export default MainSection;
