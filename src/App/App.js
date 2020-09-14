import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NotesPage from "../NotesPage/NotesPage";
import "./App.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import STORE from "../dummy-store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: STORE.notes, folders: STORE.folders };
  }

  render() {
    return (
      <div className="app">
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <MainPage
                  {...props}
                  notes={this.state.notes}
                  folders={this.state.folders}
                />
              )}
            />
            <Route
              path="/folder/:folderId"
              render={(props) => (
                <MainPage
                  {...props}
                  notes={this.state.notes.filter(
                    (note) => note.folderId === props.match.params.folderId
                  )}
                  folders={this.state.folders}
                />
              )}
            />
            <Route
              path="/note/:noteId"
              render={(props) => (
                <NotesPage
                  {...props}
                  notes={this.state.notes.filter(
                    (note) => note.id === props.match.params.noteId
                  )}
                  folders={this.state.folders}
                  allNotes={this.state.notes}
                />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
