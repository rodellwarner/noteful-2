import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditNote.css";
import Header from "../Header/Header";
import NotesAndFoldersContext from "../NotesAndFoldersContext";
import PropTypes from "prop-types";

class EditNote extends Component {
  state = {
    noteContent: { content: "", touched: false },
    noteName: { name: "", touched: false },
    noteFolder: { folder: "", touched: false },
    noteDate: { date: "", touched: false },
  };
  static contextType = NotesAndFoldersContext;

  componentDidMount() {
    const noteId = this.props.match.params.noteId;

    const selectedNote = this.context.notes.filter((note) => {
      const noteMatch = note.id === noteId;
      return noteMatch;
    });

    const defaultFolder = this.context.folders.filter((folder) => {
      const folderMatch = folder.id === selectedNote[0].folderId;
      return folderMatch;
    });

    this.setState({
      noteFolder: { folder: defaultFolder[0].id, touched: false },
      noteName: { name: selectedNote[0].name, touched: false },
      noteContent: { content: selectedNote[0].content, touched: false },
      noteDate: { date: selectedNote[0].modified, touched: false },
    });
  }

  updateContent(newText) {
    this.setState({ noteContent: { content: newText, touched: true } });
  }

  updateName(newName) {
    this.setState({ noteName: { name: newName, touched: true } });
  }

  updateFolder(folderSelection) {
    this.setState({ noteFolder: { folder: folderSelection, touched: true } });
  }

  updateDate(newDate) {
    this.setState({ noteDate: { date: newDate, touched: true } });
  }

  updateTheNote(event) {
    event.preventDefault();
    fetch(`http://localhost:9090/notes/${this.props.match.params.noteId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: `${this.props.match.params.noteId}`,
        name: this.state.noteName.name,
        modified: this.state.noteDate.date,
        folderId: this.state.noteFolder.folder,
        content: this.state.noteContent.content,
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJSON) => console.log(responseJSON));
    window.location.replace("http://localhost:3000/");
  }

  render() {
    const noteId = this.props.match.params.noteId;

    const selectedNote = this.context.notes.filter((note) => {
      const noteMatch = note.id === noteId;
      return noteMatch;
    });

    const folderOptions = this.context.folders.map((folder) => {
      return (
        <option value={folder.id} key={folder.id}>
          {folder.name}
        </option>
      );
    });

    const defaultFolder = this.context.folders.filter((folder) => {
      const folderMatch = folder.id === selectedNote[0].folderId;
      return folderMatch;
    });

    return (
      <div className="editNote">
        <Header />
        <form className="editNoteForm" onSubmit={(e) => this.updateTheNote(e)}>
          <h4>EDIT NOTE</h4>

          <label htmlFor="selectFolder">Select A Folder For This Note: </label>
          <select
            name="selectFolder"
            id="selectFolder"
            onChange={(e) => this.updateFolder(e.target.value)}
          >
            <option value={defaultFolder[0].id} key={defaultFolder[0].id}>
              {defaultFolder[0].name}
            </option>
            {folderOptions}
          </select>
          <br></br>
          <br></br>

          <label htmlFor="editNoteName">Edit This Note's Name: </label>

          <input
            type="text"
            name="editNoteName"
            id="editNoteName"
            onChange={(e) => this.updateName(e.target.value)}
            defaultValue={selectedNote[0].name}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="editNoteTextArea">Edit This Note's Content: </label>
          <textarea
            name="editNoteTextArea"
            id="editNoteTextArea"
            defaultValue={selectedNote[0].content}
            onChange={(e) => this.updateContent(e.target.value)}
          ></textarea>
          <br></br>
          <br></br>

          <label htmlFor="editNoteDate">Edit This Note's Date: </label>
          <input
            type="date"
            name="noteDate"
            defaultValue={selectedNote[0].modified}
            onChange={(e) => this.updateDate(e.target.value)}
          ></input>

          <br></br>
          <Link to="/">
            <button id="editNoteCancelButton">Cancel</button>
          </Link>
          <button type="submit" id="editNoteSubmitButton">
            Save
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

EditNote.propTypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object,
  noteId: PropTypes.string,
};

export default EditNote;
