import React, { Component } from "react";
import "./AddNote.css";
import Header from "../Header/Header";
import NotesAndFoldersContext from "../NotesAndFoldersContext";

class AddNote extends Component {
  static contextType = NotesAndFoldersContext;

  constructor(props) {
    super();
    this.state = {
      newNoteName: "",
      newSelectedFolder: "",
      newContent: "",
      newDate: "",
    };
  }

  updateNoteName(name) {
    this.setState({ newNoteName: name });
  }

  updateSelectedFolder(folder) {
    this.setState({ newSelectedFolder: folder });
  }

  updateNoteContent(content) {
    this.setState({ newContent: content });
  }

  updateNoteDate(date) {
    this.setState({ newDate: date });
  }

  submitAddNoteForm(event) {
    event.preventDefault();

    fetch("http://localhost:9090/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.newNoteName,
        content: this.state.newContent,
        folderId: this.state.newSelectedFolder,
        modified: this.state.newDate,
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

    console.log("Selected Folder", this.state.newSelectedFolder);

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
            required
          >
            {folderOptions}
          </select>
          <br></br>
          <br></br>
          <label htmlFor="newNoteName">Give This Note A Name: </label>
          <input
            type="text"
            name="newNoteName"
            onChange={(e) => this.updateNoteName(e.target.value)}
            required
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="noteContent">Add Content: </label>
          <textarea
            name="noteContent"
            id="noteContent"
            onChange={(e) => this.updateNoteContent(e.target.value)}
            required
          ></textarea>
          <br></br>
          <br></br>
          <label htmlFor="noteDate">Enter Date: </label>
          <input
            type="date"
            name="noteDate"
            onChange={(e) => this.updateNoteDate(e.target.value)}
            required
          ></input>
          <br></br>
          <br></br>
          <button id="addNoteSubmitButton">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
