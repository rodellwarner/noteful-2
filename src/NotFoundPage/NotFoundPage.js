import React, { Component } from "react";
import "./NotFoundPage.css";
import Header from "../Header/Header";

class NotFoundPage extends Component {
  render() {
    return (
      <div class="notFoundPage">
        <Header />
        <p>Page not found.</p>
      </div>
    );
  }
}

export default NotFoundPage;
