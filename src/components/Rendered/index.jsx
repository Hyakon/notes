import React from "react";
import "./index.css";

import showdown from "showdown";

const Rendered = ({ note }) => {
  const converter = new showdown.Converter();
  const html = { __html: converter.makeHtml(note.content) };
  return (
    <article>
      <h2>{note.title}</h2>
      <div dangerouslySetInnerHTML={html}></div>
    </article>
  );
};

export default Rendered;
