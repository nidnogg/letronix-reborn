[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex b21d648..bc23a95 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -42,38 +42,46 @@[m [mconst Letronix = props => {[m
   */[m
 [m
   const letronix = useRef(0);[m
[31m-  const [inProp, setInProp] = useState(false);[m
 [m
   const fileName = () => {[m
     if ((props.char == ' ') || (props.char == '\t') || (props.char == '\n')) {[m
       return '-';[m
[31m-     } else {[m
[31m-       return props.char.toLowerCase();[m
[31m-     } [m
[32m+[m[32m    } else {[m
[32m+[m[32m      return props.char.toLowerCase();[m
[32m+[m[32m    }[m[41m   [m
   }[m
[31m-  const className = () => props.char == props.char.toLowerCase() ? "lowercase" : "uppercase";[m
[31m-[m
 [m
[32m+[m[32m  const className = () => props.char == props.char.toLowerCase() ? "lowercase" : "uppercase";[m
[32m+[m[41m [m
   return ([m
[31m-    <CSSTransition in={inProp} timeout={200} classNames={`${className()}`}>[m
[31m-      <img ref={letronix} src={images[`${fileName()}`]} alt="ops"></img>[m
[31m-    </CSSTransition>[m
[32m+[m[32m      <img ref={letronix} className={`${className()}`} src={images[`${fileName()}`]} alt="ops"></img>[m
   );[m
[32m+[m
 }[m
 [m
 export default function App() {[m
   const [text, setText] = useState("");[m
[32m+[m[32m  const [inProp, setInProp] = useState(false);[m
 [m
[31m-  const handleChange = ({ target }) => setText(target.value);[m
[32m+[m[32m  const handleChange = ({ target }) => {[m
[32m+[m[32m    setInProp(true);[m
[32m+[m[32m    setText(target.value);[m
[32m+[m[32m  }[m
 [m
   const updateLetronix = () => {[m
     const userInput = [];[m
[32m+[m[41m    [m
     for (let i = 0; i < text.length; i++) {[m
       userInput.push(text.charAt(i));[m
     }[m
[31m-[m
[32m+[m[41m    [m
     return userInput.map((char, index) => {[m
[31m-      return <Letronix key={index} char={char}></Letronix>[m
[32m+[m[32m      const className = () => char == char.toLowerCase() ? "lowercase" : "uppercase";[m
[32m+[m[32m      return ([m
[32m+[m[32m        <CSSTransition key={index} in={inProp} timeout={200} classNames={`${className()}`}>[m
[32m+[m[32m          <Letronix char={char}></Letronix>[m
[32m+[m[32m        </CSSTransition>[m
[32m+[m[32m      );[m
     });[m
   }[m
 [m
