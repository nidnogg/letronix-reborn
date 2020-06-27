import React, { useState } from "react";
import "./styles.css";

const alphabet = [
  { char: 'a', sourcePath:"./assets/a.png" },
  { char: 'b', sourcePath:"./assets/b.png" },
  { char: 'c', sourcePath:"./assets/c.png" },
  { char: 'd', sourcePath:"./assets/d.png" },
  { char: 'a', sourcePath:"./assets/a.png" },
  { char: 'e', sourcePath:"./assets/e.png" },
  { char: 'f', sourcePath:"./assets/f.png" },
  { char: 'g', sourcePath:"./assets/g.png" },
  { char: 'h', sourcePath:"./assets/h.png" },
  { char: 'i', sourcePath:"./assets/i.png" },
  { char: 'j', sourcePath:"./assets/j.png" },
  { char: 'k', sourcePath:"./assets/k.png" },
  { char: 'l', sourcePath:"./assets/l.png" },
  { char: 'm', sourcePath:"./assets/m.png" },
  { char: 'n', sourcePath:"./assets/n.png" },
  { char: 'o', sourcePath:"./assets/o.png" },
  { char: 'p', sourcePath:"./assets/p.png" },
  { char: 'q', sourcePath:"./assets/q.png" },
  { char: 'r', sourcePath:"./assets/r.png" },
  { char: 's', sourcePath:"./assets/s.png" },
  { char: 't', sourcePath:"./assets/t.png" },
  { char: 'u', sourcePath:"./assets/u.png" },
  { char: 'v', sourcePath:"./assets/v.png" },
  { char: 'w', sourcePath:"./assets/w.png" },
  { char: 'x', sourcePath:"./assets/x.png" },
  { char: 'y', sourcePath:"./assets/y.png" },
  { char: 'z', sourcePath:"./assets/z.png" }
];


const Letter = props => {
  const { sourcePath, variant } = props;
  return <img src={sourcePath}></img>
}

/* require sucks ass! fuck require */
// https://stackoverflow.com/questions/30752365/node-js-require-path-stored-in-a-variable

const charToImageMap = {};

alphabet.map((letter) => {
  charToImageMap[letter.char] = [];
  for (let i = 0; i < letter.variants; i++) {
    console.log(`./assets/${letter.char}.png`);
    charToImageMap[letter.char].push(require(`./assets/${letter.char}.png`))
  }
});

export default function App() {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => setText(target.value);

  const getLetterImage = (char) => {
    return char;
    // retornar a imagem dentro das variacoes
  };

  const updateLetronix = () => {
    const arrayOfChars = [];

    for (let i = 0; i < text.length; i++) {
      arrayOfChars.push(text.charAt(i));
    }

    return arrayOfChars.map(char => {
      console.log(charToImageMap);
      return <img className={char == char.toLowerCase() ? "lowercase" : "uppercase"} src={charToImageMap[char]} alt={char} />;
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