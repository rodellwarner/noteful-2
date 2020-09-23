import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NotesPage from "../NotesPage/NotesPage";
import "./App.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class App extends Component {
  state = { notes: [], folders: [], error: null };

  deleteNote = () => {};

  updateNotes = (newNotes) => {
    this.setState({ notes: newNotes });
  };

  updateFolders = (newFolders) => {
    this.setState({ folders: newFolders });
  };

  componentDidMount() {
    fetch("http://localhost:9090/folders").then((results) => {
      results.json().then((foldersJSON) => {
        this.setState({ folders: foldersJSON });
      });
    });

    fetch("http://localhost:9090/notes").then((results) => {
      results.json().then((notesJSON) => {
        this.setState({ notes: notesJSON });
      });
    });
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      updateFolders: this.updateFolders,
      updateNotes: this.updateNotes,
    };
    return (
      <div className="app">
        <NotesAndFoldersContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route path="/folder/:folderId" component={MainPage} />

            <Route path="/note/:noteId" component={NotesPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </NotesAndFoldersContext.Provider>
      </div>
    );
  }
}

export default App;
