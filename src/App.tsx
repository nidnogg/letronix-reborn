import React, { useEffect, useState, useRef } from "react";
import images from './assets/*.png';
import "./styles.css";

interface LetronixProps {
  key: number,
  char: string
}

const Letronix = ({ key, char }: LetronixProps) => {

  const fileName = () => {
    if ((char == ' ') || (char == '\t') || (char == '\n')) {
      return '-';
     } else {
       return `${char.toLowerCase()}0`;
     } 
  }
  
  const className = () => char == char.toLowerCase() ? "lowercase" : "uppercase";

  return (
    <img className={`${className()}`} src={images[`${fileName()}`]}  alt="ops"></img>
  );
}

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