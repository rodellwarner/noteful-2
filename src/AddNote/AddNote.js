import React, { Component } from "react";
import "./AddNote.css";
import Header from "../Header/Header";
import NotesAndFoldersContext from "../NotesAndFoldersContext";
import ValidationError from "../ValidationError/ValidationError";

class AddNote extends Component {
  static contextType = NotesAndFoldersContext;

  state = {
    name: { newNoteName: "", touched: false },
    folder: { newSelectedFolder: "", touched: false },
    content: { newContent: "", touched: false },
    date: { newDate: "", touched: false },
  };

  updateNoteName(nameOfNote) {
    this.setState({ name: { newNoteName: nameOfNote, touched: true } });
  }

  updateSelectedFolder(folderChoice) {
    this.setState({
      folder: { newSelectedFolder: folderChoice, touched: true },
    });
  }

  updateNoteContent(contentEntered) {
    this.setState({ content: { newContent: contentEntered, touched: true } });
  }

  updateNoteDate(date) {
    this.setState({ date: { newDate: date, touched: true } });
  }

  validateName() {
    const name = this.state.name.newNoteName.trim();
    if (name.length === 0) {
      return "Name is required.";
    } else if (name.length < 3) {
      return "Name must be at least three characters long.";
    }
  }

  validateFolderSelection() {
    const folderSelection = this.state.folder.newSelectedFolder;
    if (folderSelection.length === 0) {
      return "Please select a folder from the menu.";
    }
  }

  validateContent() {
    const contentEntry = this.state.content.newContent;
    if (contentEntry.length < 1)
      return "Please enter the contents of the note.";
  }

  requiredFieldNotifier(field) {
    if (field.touched === false) {
      return <div className="requiredField">*required field</div>;
    }
  }

  submitAddNoteForm(event) {
    event.preventDefault();

    fetch("http://localhost:9090/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name.newNoteName,
        content: this.state.content.newContent,
        folderId: this.state.folder.newSelectedFolder,
        modified: this.state.date.newDate,
      }),
    });
    window.location.replace("http://localhost:3000/");
  }
  render() {
    const folderOptions = this.context.folders.map((folder) => {
      return (
        <option value={folder.id} key={folder.id}>
          {folder.name}
        </option>
      );
    });

    return (
      <div className="addNotePage">
        <Header />

        <form
          className="addNoteForm"
          onSubmit={(e) => this.submitAddNoteForm(e)}
        >
          <h4>ADD A NOTE</h4>

          <label htmlFor="selectFolder">Select A Folder: </label>

          <select
            name="selectFolder"
            id="selectFolder"
            onChange={(e) => this.updateSelectedFolder(e.target.value)}
          >
            <option value="">select a folder</option>
            {folderOptions}
          </select>
          {this.requiredFieldNotifier(this.state.folder)}
          {this.state.folder.touched && (
            <ValidationError message={this.validateFolderSelection()} />
          )}
          <br></br>
          <br></br>
          <label htmlFor="newNoteName">Give This Note A Name: </label>

          <input
            type="text"
            name="newNoteName"
            onChange={(e) => this.updateNoteName(e.target.value)}
          ></input>
          {this.requiredFieldNotifier(this.state.name)}
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}

          <br></br>
          <br></br>
          <label htmlFor="noteContent">Add Content: </label>
          <textarea
            name="noteContent"
            id="noteContent"
            onChange={(e) => this.updateNoteContent(e.target.value)}
          ></textarea>
          {this.requiredFieldNotifier(this.state.content)}
          {this.state.content.touched && (
            <ValidationError message={this.validateContent()} />
          )}
          <br></br>
          <br></br>
          <label htmlFor="noteDate">Enter Date: </label>
          <input
            type="date"
            name="noteDate"
            onChange={(e) => this.updateNoteDate(e.target.value)}
          ></input>
          {this.requiredFieldNotifier(this.state.date)}
          <br></br>
          <br></br>
          <button
            type="submit"
            className="addNoteSubmitButton"
            disabled={
              this.validateName() ||
              this.validateFolderSelection() ||
              this.validateContent()
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
