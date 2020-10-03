import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

class ErrorCatcher extends Component {
  constructor(props) {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="errorCatcher">
          <Header />
          <div className="editNoteForm">
            <h2>An error occured. We could not display this note.</h2>
            <br></br>
            <Link to="/">Click here to return to the homepage.</Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorCatcher;
