import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotesPageMainSection.css";
import Notes from "../Notes/Notes";
import NotesAndFoldersContext from "../NotesAndFoldersContext";
import PropTypes from "prop-types";

class NotesPageMainSection extends Component {
  static contextType = NotesAndFoldersContext;

  render() {
    const noteId = this.props.noteId;

    const notes = this.context.notes.filter((note) => {
      return note.id === noteId;
    });

    return (
      <div className="mainSection">
        <Link to="/add-note">
          <button className="addNoteButton">Add Note</button>
        </Link>
        <Notes notes={notes} />
      </div>
    );
  }
}

NotesPageMainSection.propTypes = { noteId: PropTypes.string };

export default NotesPageMainSection;
