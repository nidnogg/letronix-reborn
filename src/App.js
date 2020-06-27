import React, { useState } from "react";
import "./styles.css";

const alphabet = [
  { char: 'a', variants: 1 },
  { char: 'b', variants: 1 },
  { char: 'c', variants: 1 },
  { char: 'd', variants: 1 },
  { char: 'e', variants: 1 },
  { char: 'f', variants: 1 },
  { char: 'g', variants: 1 },
  { char: 'h', variants: 1 },
  { char: 'i', variants: 1 },
  { char: 'j', variants: 1 },
  { char: 'k', variants: 1 },
  { char: 'l', variants: 1 },
  { char: 'm', variants: 1 },
  { char: 'n', variants: 1 },
  { char: 'o', variants: 1 },
  { char: 'p', variants: 1 },
  { char: 'q', variants: 1 },
  { char: 'r', variants: 1 },
  { char: 's', variants: 1 },
  { char: 't', variants: 1 },
  { char: 'u', variants: 1 },
  { char: 'v', variants: 1 },
  { char: 'w', variants: 1 },
  { char: 'x', variants: 1 },
  { char: 'y', variants: 1 },
  { char: 'z', variants: 1 }
];


const Letter = props => {
  { sourcePath, variant } = props;
  return <img src={`sourcePath${variant}.png`}></img>
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