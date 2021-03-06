import React from "react";
import Button from "../Button";
import Preview from "../Preview";
import "./index.css";

const Menu = ({ notes, handle, handleNew }) => {
  return (
    <aside>
      <Button handle={handleNew} text="Ajouter une Note" />
      <ul>
        {notes.map((note) => (
          <Preview key={note.id} note={note} handle={handle} />
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
