import React, { useState } from "react";
import "./styles.css";

const charToImageMap = {
  a: require("./assets/a.png"),
  b: require("./assets/b.png"),
  c: require("./assets/c.png"),
  d: require("./assets/d.png"),
  e: require("./assets/e.png"),
  f: require("./assets/f.png")
};

export default function App() {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => setText(target.value);

  const updateLetronix = () => {
    const arrayOfChars = [];

    for (let i = 0; i < text.length; i++) {
      arrayOfChars.push(text.charAt(i).toLocaleLowerCase());
    }

    return arrayOfChars.map(char => {
      return <img src={charToImageMap[char]} alt="Letronix" />;
    });
  };

  return (
    <div className="App">

      <header>
        <h3>letronix reborn!</h3>
        <p> 
          Digite texto abaixo e receba Letronix:
        </p>
      </header>
      <section className="letronix">
        <input value={text} onChange={handleChange} />
        <div className="letronix-output">{updateLetronix()}</div>
      </section>
    </div>
  );
}
