import "./styles.css";
import React, { useState } from "react";
import Project from "./component/Projects";
import Contact from "./component/Contact";

export default function App() {
  var interest;
  const data = [
    "I am a Software Developer",
    "I am a Coder",
    "I am a Full Stack Developer"
  ];
  const [field, setField] = useState("Software Developer");
  const [toggle, setToggle] = useState(false);
  // setInterval(() => {
  // let index = Math.floor(Math.random() * data.length);
  // interest = data[index];
  //  setField(interest);
  // }, 5000);
  function toggleButton() {
    setToggle(!toggle);
  }
  return (
    <div>
      <div className="App">
        <h1>Ayush Tiwari</h1>
        <h2>{field}</h2>
        {toggle ? (
          <div>
            <button type="button" onClick={toggleButton}>
              Show Less
            </button>
            <p>I live in Bilaspur Chhatisgarh</p>
          </div>
        ) : (
          <button type="button" onClick={toggleButton}>
            Read More
          </button>
        )}
      </div>
      <hr />
      <Project />
      <hr />
      <Contact />
    </div>
  );
}
