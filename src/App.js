import React, { useState } from "react";
import "./styles.css";

const charToImageMap = {
  a: require("./assets/a.png"),
  b: require("./assets/b.png"),
  c: require("./assets/c.png"),
  d: require("./assets/d.png"),
  e: require("./assets/e.png"),
  f: require("./assets/f.png"),
  g: require("./assets/g.png"),
  h: require("./assets/h.png"),
  i: require("./assets/i.png"),
  j: require("./assets/j.png"),
  k: require("./assets/k.png"),
  l: require("./assets/l.png"),
  m: require("./assets/m.png"),
  n: require("./assets/n.png"),
  o: require("./assets/o.png"),
  p: require("./assets/p.png"),
  q: require("./assets/q.png"),
  r: require("./assets/r.png"),
  s: require("./assets/s.png"),
  t: require("./assets/t.png"),
  u: require("./assets/u.png"),
  v: require("./assets/v.png"),
  w: require("./assets/w.png"),
  x: require("./assets/x.png"),
  y: require("./assets/y.png"),
  z: require("./assets/z.png"),
  ' ': require("./assets/spc.png")
};


export default function App() {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => setText(target.value);

  const updateLetronix = () => {
    const arrayOfChars = [];

    for (let i = 0; i < text.length; i++) {
      arrayOfChars.push(text.charAt(i));
    }

    return arrayOfChars.map(char => {
      return <img className={char == char.toLowerCase() ? "lowercase" : "uppercase"} src={charToImageMap[char.toLocaleLowerCase()]} alt={char}/>;
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