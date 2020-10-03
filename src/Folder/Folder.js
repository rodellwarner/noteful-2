import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";
import PropTypes from "prop-types";

class Folder extends Component {
  render() {
    return (
      <Link to={`/folder/${this.props.folderId}`}>
        <div className={this.props.className}>
          Folder name: <b>{this.props.folder.name}</b>
        </div>
      </Link>
    );
  }
}

Folder.propTypes = {
  folderId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  folder: PropTypes.object.isRequired,
};

export default Folder;
