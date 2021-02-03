import React from "react";
import "./index.css";

const Button = (props) => {
  const {
    handle = "",
    handleArgs = () => 0,
    text,
    className = "",
    args = "",
  } = props;
  console.log(text, handleArgs);
  return (
    <button
      className={className}
      onClick={handle ? handle : () => handleArgs(args)}
    >
      {text}
    </button>
  );
};

export default Button;
