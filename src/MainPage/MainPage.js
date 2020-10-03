import React, { Component } from "react";
import "./MainPage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";
import PropTypes from "prop-types";

class MainPage extends Component {
  render() {
    const folderId = this.props.match.params.folderId;
    return (
      <div className="mainPage">
        <Header />
        <Sidebar folderId={folderId} />
        <MainSection folderId={folderId} />
      </div>
    );
  }
}

MainPage.propTypes = { match: PropTypes.object.isRequired };

export default MainPage;
