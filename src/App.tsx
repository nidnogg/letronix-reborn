import { useState, useRef } from "react";
import images from '../assets/*.png';
import "./styles.css";

interface LetronixProps {
  key: number;
  char: string;
}

const symbols = [
  { char: '1', hasVariants: false, curVariant: 0},
  { char: '2', hasVariants: false, curVariant: 0},
  { char: '3', hasVariants: false, curVariant: 0},
  { char: '4', hasVariants: false, curVariant: 0},
  { char: '5', hasVariants: false, curVariant: 0},
  { char: '6', hasVariants: false, curVariant: 0},
  { char: '7', hasVariants: false, curVariant: 0},
  { char: '8', hasVariants: false, curVariant: 0},
  { char: '9', hasVariants: false, curVariant: 0},
  { char: '0', hasVariants: false, curVariant: 0},
  { char: 'a', hasVariants: false, curVariant: 0},
  { char: 'c', hasVariants: true, curVariant: 0},
  { char: 'b', hasVariants: false, curVariant: 0},
  { char: 'ç', hasVariants: false, curVariant: 0},
  { char: 'd', hasVariants: false, curVariant: 0},
  { char: 'e', hasVariants: false, curVariant: 0},
  { char: 'f', hasVariants: false, curVariant: 0},
  { char: 'g', hasVariants: false, curVariant: 0},
  { char: 'h', hasVariants: false, curVariant: 0},
  { char: 'i', hasVariants: false, curVariant: 0},
  { char: 'j', hasVariants: false, curVariant: 0},
  { char: 'k', hasVariants: false, curVariant: 0},
  { char: 'l', hasVariants: false, curVariant: 0},
  { char: 'm', hasVariants: false, curVariant: 0},
  { char: 'n', hasVariants: false, curVariant: 0},
  { char: 'o', hasVariants: false, curVariant: 0},
  { char: 'p', hasVariants: false, curVariant: 0},
  { char: 'q', hasVariants: false, curVariant: 0},
  { char: 'r', hasVariants: false, curVariant: 0},
  { char: 's', hasVariants: false, curVariant: 0},
  { char: 't', hasVariants: false, curVariant: 0},
  { char: 'u', hasVariants: false, curVariant: 0},
  { char: 'v', hasVariants: false, curVariant: 0},
  { char: 'w', hasVariants: false, curVariant: 0},
  { char: 'x', hasVariants: false, curVariant: 0},
  { char: 'y', hasVariants: false, curVariant: 0},
  { char: 'z', hasVariants: false, curVariant: 0}
];

const Letronix = ({key, char}: LetronixProps) => {

  const letronix = useRef(0);

  const fileName = () => {
    if ((char == ' ') || (char == '\t') || (char == '\n')) {
      return '-';
    } else {
       return `${char.toLowerCase()}0`;
    } 
  }

  const className = () => char == char.toLowerCase() ? "lowercase" : "uppercase";

  return (
    // <img className={`${className()}`} src={images[`${fileName()}`]}  alt="ops"></img>
    <img className={`${className()}`} src={images[0]}  alt="ops"></img>

  );

}

export default function App() {
  const [text, setText] = useState("");
  const [inProp, setInProp] = useState(false);

  const handleChange = ({ target }: any) => {
    setInProp(true);
    setText(target.value);
  }

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
        <h3></h3>
        
        <p>
          Type below and get Letronix:
        </p>
       
      </header>
      <section className="letronix">
        <input className="input-position" value={text} onChange={handleChange} />
        <div className="input-position rotate">
          (use windows + shift + s to print) <br />
          made with love by <a className="nidLink" href="https://github.com/nidnogg_">nidnogg.</a>
        </div> 
        <div className="letronix-output">{updateLetronix()}</div>
      </section>
    </div>
  );
}