import React, { Component } from "react";
import Header from "../Header/Header";
import "./AddFolder.css";

class AddFolder extends Component {
  constructor(props) {
    super();
    this.state = { newFolderName: "" };
  }

  updateFolderName(name) {
    this.setState({ newFolderName: name });
  }

  submitAddFolderForm(event) {
    event.preventDefault();
    const folderName = { name: this.state.newFolderName };
    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(folderName),
    });
    window.location.replace("http://localhost:3000/");
  }

  render() {
    return (
      <div className="addFolderPage">
        <Header />

        <form
          className="addFolderForm"
          onSubmit={(e) => this.submitAddFolderForm(e)}
        >
          <h4>ADD A FOLDER</h4>
          <label htmlFor="newFolderName">Folder Name: </label>
          <input
            type="text"
            name="newFolderName"
            onChange={(e) => this.updateFolderName(e.target.value)}
            required
          ></input>
          <br></br>
          <button id="addFolderSubmitButton">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFolder;
