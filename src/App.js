import React, { useState } from "react";
import "./styles.css";
import images from './assets/*.png';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

//const images = importAll(require.context('./assets', false, /\.(gif|jpe?g|svg)$/));
//const images = require('./assets/*.png');

const alphabet = [
  { char: 'a', sourcePaths:["./assets/a.png"] },
  { char: 'b', sourcePaths:["./assets/b.png"] },
  { char: 'c', sourcePaths:["./assets/c.png", "./assets/c1.png"] },
  { char: 'd', sourcePaths:["./assets/d.png"] },
  { char: 'a', sourcePaths:["./assets/a.png"] },
  { char: 'e', sourcePaths:["./assets/e.png"] },
  { char: 'f', sourcePaths:["./assets/f.png"] },
  { char: 'g', sourcePaths:["./assets/g.png"] },
  { char: 'h', sourcePaths:["./assets/h.png"] },
  { char: 'i', sourcePaths:["./assets/i.png"] },
  { char: 'j', sourcePaths:["./assets/j.png"] },
  { char: 'k', sourcePaths:["./assets/k.png"] },
  { char: 'l', sourcePaths:["./assets/l.png"] },
  { char: 'm', sourcePaths:["./assets/m.png"] },
  { char: 'n', sourcePaths:["./assets/n.png"] },
  { char: 'o', sourcePaths:["./assets/o.png"] },
  { char: 'p', sourcePaths:["./assets/p.png"] },
  { char: 'q', sourcePaths:["./assets/q.png"] },
  { char: 'r', sourcePaths:["./assets/r.png"] },
  { char: 's', sourcePaths:["./assets/s.png"] },
  { char: 't', sourcePaths:["./assets/t.png"] },
  { char: 'u', sourcePaths:["./assets/u.png"] },
  { char: 'v', sourcePaths:["./assets/v.png"] },
  { char: 'w', sourcePaths:["./assets/w.png"] },
  { char: 'x', sourcePaths:["./assets/x.png"] },
  { char: 'y', sourcePaths:["./assets/y.png"] },
  { char: 'z', sourcePaths:["./assets/z.png"] }
];


const Letter = props => {
  const { letter } = props;
  
  return <img src={images['a.png']}></img>
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
  };



  const updateLetronix = () => {
    const userInput = [];
    for (let i = 0; i < text.length; i++) {
      userInput.push(text.charAt(i));
      console.log(images);
    }
  
    const letters = userInput.map( (letter) => {
      <img key={letter} src={images[key]}></img>
    });

    return userInput.map((char) => {
      return <img key={char} className={char == char.toLowerCase() ? "lowercase" : "uppercase"} src={images[char]} alt={`${char}.png`} />;

    });
    /* works 
    const file_name = 'a';

    return (
      <div>
        <img src={images[file_name]} alt="nope.avi"/>
      </div>
    );

    */
    /*
    for (let i = 0; i < text.length; i++) {
      arrayOfChars.push(text.charAt(i));
    }

    return arrayOfChars.map(char => {
      console.log(charToImageMap);
      return <img className={char == char.toLowerCase() ? "lowercase" : "uppercase"} src={charToImageMap[char]} alt={char} />;
    });
    */
  }

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