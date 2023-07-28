import React, { useState } from "react";

function TextForm(props) {
  const upperCaseClick = () => {
    console.log("Uppercase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };


  const lowerCaseClick = () =>{
    let newText1 = text.toLowerCase();
    setText(newText1);
  }

  const emptyClick = () =>{
    let newText2 = '';
    setText(newText2);
  }
  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  const countLettersAndWords = (inputText) => {
    // Calculate word count
    const words = inputText.trim().split(/\s+/);
    const wordCount = inputText === '' ? 0 : words.length;

    // Calculate letter count (excluding spaces)
    const letterCount = inputText.replace(/\s+/g, '').length;

    return { wordCount, letterCount };
  };

  

  

// hooks - [default value, setvalue to]
  const [text, setText] = useState("Enter the text here");
  
  const { wordCount, letterCount } = countLettersAndWords(text);

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
      <button className="btn btn-primary" onClick={lowerCaseClick}>
        Lowercase
      </button>
      <button className="btn btn-primary" onClick={emptyClick}>
        count
      </button>
    </div>
    <div className="container my-5">
        <h1>My text summary</h1>
        <p>{wordCount} words and {letterCount} characters</p>
    </div>
    </>
  );
}

export default TextForm;
