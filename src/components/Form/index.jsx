import React from "react";
import Button from "../Button";
import "./index.css";

const Form = ({ handle, title, content, handleTitle, handleContent }) => {
  return (
    <form onSubmit={handle}>
      <input
        onChange={handleTitle}
        type="text"
        name="title"
        id=""
        value={title}
      />{" "}
      <br />
      <textarea
        onChange={handleContent}
        name="content"
        id=""
        cols="30"
        rows="10"
        value={content}
      ></textarea>{" "}
      <br />
      <Button text="Sauvegarder" />
    </form>
  );
};

export default Form;
