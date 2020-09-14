import React, { Component } from "react";
import "./NotesPage.css";
import Header from "../Header/Header";
import NotesPageSidebar from "../NotesPageSidebar/NotesPageSidebar";
import NotesPageMainSection from "../NotesPageMainSection/NotesPageMainSection";

class NotesPage extends Component {
  render() {
    return (
      <div className="notesPage">
        <Header />
        <NotesPageMainSection notes={this.props.notes} />
        <NotesPageSidebar
          folders={this.props.folders}
          notes={this.props.notes}
          allNotes={this.props.allNotes}
        />
      </div>
    );
  }
}

export default NotesPage;
