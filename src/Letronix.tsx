import React from "react";
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

export default Letronix;