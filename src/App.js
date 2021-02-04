import "./App.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import Menu from "./components/Menu";
import Rendered from "./components/Rendered";
import Form from "./components/Form";

const App = (props) => {
  const [myNotes, setMyNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("myNotes")) || []
  );
  const [currentNote, setCurrentNote] = React.useState({
    id: uuidv4(),
    title: "",
    content: "",
  });

  const [formTitle, setFormTitle] = React.useState("");
  const [formContent, setFormContent] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isReplaced =
      currentNote && myNotes.some((note) => note.id === currentNote.id);

    console.log(myNotes);
    if (!isReplaced) {
      const newNote = {
        id: uuidv4(),
        title: e.target.elements.title.value,
        content: e.target.elements.content.value,
      };
      console.log("submit", newNote);
      // Meileur Facon
      setMyNotes((prevState) => [...prevState, newNote]);
      // setMyNotes(myNotes.concat(newNote));
    } else {
      const tmp = myNotes.map((note) => {
        if (note.id === currentNote.id) {
          const newNote = {
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
    // myNotes.findIndex id
    setCurrentNote(note);
    console.log("noteClick");
  };

  const handleNewNote = () => {
    setCurrentNote({
      id: uuidv4(),
      title: "",
      content: "",
    });
    setFormContent("");
    setFormTitle("");
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
      <Menu
        // Use onNew onSelect on.. instead of Handle
        handleNew={handleNewNote}
        notes={myNotes}
        handle={handleSelectNote}
      />
      <main>
        <Rendered title={formTitle} content={formContent} />
        <Form
          // onSubmit
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
