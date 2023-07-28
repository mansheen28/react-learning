import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textmode, setTextMode] = useState("dark");
  const [pinkClrMode, setPinkClrMode] = useState("white");
  const [pinkTextMode, setPinkTextMode] = useState("pink");
  const [greenClrMode, setGreenClrMode] = useState("white");
  const [greenTextMode, setGreenTextMode] = useState("green");
  const [emptyText, setEmptyText] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode("Light");
    } else {
      setMode("light");
      setTextMode("dark");
    }
  };

  const pinkMode = () => {
    if (pinkClrMode === "white") {
      setPinkClrMode((document.body.style.backgroundColor = "pink"));
      setPinkTextMode("light");
    } else {
      setPinkClrMode((document.body.style.backgroundColor = "white"));
      setPinkTextMode("pink");
    }
  };

  const greenMode = () => {
    if (greenClrMode === "white") {
      setGreenClrMode((document.body.style.backgroundColor = "green"));
      setGreenTextMode("light");
    } else {
      setGreenClrMode((document.body.style.backgroundColor = "white"));
      setGreenTextMode("green");
    }
  };

  const handleChange = (event) => {
    setEmptyText(event.target.value);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Mansheen"
          heading="About"
          mode={mode}
          textmode={textmode}
          toggleMode={toggleMode}
          pinkTextmode={pinkTextMode}
          pinkMode={pinkMode}
          greenTextMode={greenTextMode}
          greenMode={greenMode}
        />
        <div className="container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm
                heading="ENTER THE TEXT"
                value={emptyText}
                onChange={handleChange}
              />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
