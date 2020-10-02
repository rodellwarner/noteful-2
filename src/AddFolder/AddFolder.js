import React, { Component } from "react";
import Header from "../Header/Header";
import ValidationError from "../ValidationError/ValidationError";
import "./AddFolder.css";

class AddFolder extends Component {
  state = { folderName: { newFolderName: "", touched: false } };

  updateFolderName(name) {
    this.setState({ folderName: { newFolderName: name, touched: true } });
  }

  validateFolderName() {
    const folderNameEntry = this.state.folderName.newFolderName;
    if (folderNameEntry.length < 1) {
      return "Please enter a name for this folder.";
    } else if (folderNameEntry.length < 3) {
      return "Folder name must be at least 3 characters long.";
    }
  }

  requiredFieldNotifier(field) {
    if (field.touched === false) {
      return <div className="requiredField">*required field</div>;
    }
  }

  submitAddFolderForm(event) {
    event.preventDefault();
    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.folderName.newFolderName }),
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
          {this.requiredFieldNotifier(this.state.folderName)}
          {this.state.folderName.touched && (
            <ValidationError
              message={this.validateFolderName(
                this.state.folderName.newFolderName
              )}
            />
          )}
          <br></br>
          <button
            id="addFolderSubmitButton"
            disabled={this.validateFolderName()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFolder;
