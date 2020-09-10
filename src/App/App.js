import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
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
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
