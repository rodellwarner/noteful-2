import React, { Component } from "react";
import "./NotesPage.css";
import Header from "../Header/Header";
import NotesPageSidebar from "../NotesPageSidebar/NotesPageSidebar";
import NotesPageMainSection from "../NotesPageMainSection/NotesPageMainSection";

class NotesPage extends Component {
  render() {
    const noteId = this.props.match.params.noteId;

    // const notes = this.context.notes.filter((note) => {
    //   return note.id === noteId;
    // });

    return (
      <div className="notesPage">
        <Header />
        <NotesPageMainSection noteId={noteId} />
        <NotesPageSidebar
          noteId={noteId}
          // folders={this.props.folders}
          // notes={this.props.notes}
          // allNotes={this.props.allNotes}
        />
      </div>
    );
  }
}

export default NotesPage;
