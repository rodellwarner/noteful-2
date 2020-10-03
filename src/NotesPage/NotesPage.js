import React, { Component } from "react";
import "./NotesPage.css";
import Header from "../Header/Header";
import NotesPageSidebar from "../NotesPageSidebar/NotesPageSidebar";
import NotesPageMainSection from "../NotesPageMainSection/NotesPageMainSection";
import PropTypes from "prop-types";

class NotesPage extends Component {
  render() {
    const noteId = this.props.match.params.noteId;

    return (
      <div className="notesPage">
        <Header />
        <NotesPageMainSection noteId={noteId} />
        <NotesPageSidebar noteId={noteId} />
      </div>
    );
  }
}

NotesPage.propTypes = { match: PropTypes.object };

export default NotesPage;
