import React from "react";
import "./index.css";

import showdown from "showdown";

const Rendered = ({ title, content }) => {
  const converter = new showdown.Converter();
  const html = { __html: converter.makeHtml(content) };
  return (
    <article>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={html}></div>
    </article>
  );
};

export default Rendered;
