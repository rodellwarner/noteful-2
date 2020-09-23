import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import Header from "../Header/Header";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFoundPage">
        <Header />
        <div className="message">
          <p>Hmmm! ▓ We couldn't find that page! ⍨ </p>
          <Link to="/">
            <button className="notFoundButton">
              Go Back To The Main Page?
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
