import React from "react";
import Button from "../Button";
import "./index.css";

const Preview = ({ note, handle }) => {
  const text = (
    <>
      <h2>{note.title}</h2>
      <p>{note.content.split(" ").slice(0, 15).join(" ")}</p>
    </>
  );
  return (
    <li>
      <Button
        className="link-button"
        handleArgs={handle}
        text={text}
        args={note}
      />
    </li>
  );
};

export default Preview;
