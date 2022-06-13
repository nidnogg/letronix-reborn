import React, { useState } from "react";
import Letronix from "./Letronix";
import "./styles.css";


export default function App() {
  const [text, setText] = useState("");

  const handleChange = ({ target }: any) => setText(target.value);

  const updateLetronix = () => {
    const userInput = [];
    for (let i = 0; i < text.length; i++) {
      userInput.push(text.charAt(i));
    }

    return userInput.map((char, index) => {
      return <Letronix key={index} char={char} />
    });
  }

  return (
    <div className="App">
      <header>
        <h3>letronix reborn!</h3>
        <p>
          Type some text below and get Letronix:
        </p>
      </header>
      <section className="letronix">
        <input value={text} onChange={handleChange} />
        <div className="letronix-output">{updateLetronix()}</div>
      </section>
    </div>
  );
}