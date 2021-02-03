import "./App.css";

import React from "react";
import Menu from "./components/Menu";
import Rendered from "./components/Rendered";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";

const App = (props) => {
  const [myNotes, setMyNotes] = React.useState(
    JSON.parse(localStorage.getItem("myNotes")) || []
  );
  const [currentNote, setCurrentNote] = React.useState(null);

  const [formTitle, setFormTitle] = React.useState("");
  const [formContent, setFormContent] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isReplaced = myNotes.some((note) => note.id === currentNote.id);

    console.log(myNotes);
    if (!isReplaced) {
      const newNote = {
        id: uuidv4(),
        title: e.target.elements.title.value,
        content: e.target.elements.content.value,
      };
      console.log("submit", newNote);
      setMyNotes(myNotes.concat(newNote));
    } else {
      let tmp = myNotes.map((note) => {
        if (note.id === currentNote.id) {
          let newNote = {
            id: note.id,
            title: e.target.elements.title.value,
            content: e.target.elements.content.value,
          };
          return newNote;
        }
        return note;
      });
      setMyNotes(tmp);
    }
  };

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setFormContent(e.target.value);
  };
  const handleSelectNote = (note) => {
    setCurrentNote(note);
    console.log("noteClick");
  };

  React.useEffect(() => {
    console.log(currentNote);
    if (currentNote) {
      setFormTitle(currentNote.title);
      setFormContent(currentNote.content);
    }
  }, [currentNote]);

  React.useEffect(() => {
    console.log(myNotes);
    console.log("before", localStorage.length);
    const save = JSON.stringify(myNotes);
    localStorage.setItem("myNotes", save);
  }, [myNotes]);

  return (
    <div className="container">
      <Menu notes={myNotes} handle={handleSelectNote} />
      <main>
        <Rendered />
        <Form
          handle={handleSubmit}
          title={formTitle}
          content={formContent}
          handleTitle={handleTitleChange}
          handleContent={handleContentChange}
        />
      </main>
    </div>
  );
};

export default App;
