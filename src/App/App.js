import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "" };
  }

  render() {
    return (
      <div className="app">
        <main>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
