import React, { useState } from "react";

function TextForm(props) {
  const upperCaseClick = () => {
    console.log("Uppercase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
// hooks - [default value, setvalue to]
  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCaseClick}>
        Uppercase
      </button>
    </div>
    <div className="container my-5">
        <h1>My text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}

export default TextForm;
