import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => setResult(result.concat(e.target.name));

  const calculate = () => setResult(eval(result).toString());

  const clear = () => setResult("");
  return (
    <div>
      <input value={result} type="text" />
      <button className="clear" onClick={clear}>
        C
      </button>
      <button className="equals" onClick={calculate}>
        =
      </button>
      <button name="+" className="add" onClick={handleClick}>
        +
      </button>
      <button name="-" className="minus" onClick={handleClick}>
        -
      </button>
      <button name="*" className="times" onClick={handleClick}>
        *
      </button>
      <button name="/" className="divide" onClick={handleClick}>
        /
      </button>
      <button name="0" className="zero" onClick={handleClick}>
        0
      </button>
      <button name="7" className="is-num" onClick={handleClick}>
        7
      </button>
      <button name="8" className="is-num" onClick={handleClick}>
        8
      </button>
      <button name="9" className="is-num" onClick={handleClick}>
        9
      </button>
      <button name="4" className="is-num" onClick={handleClick}>
        4
      </button>
      <button name="5" className="is-num" onClick={handleClick}>
        5
      </button>
      <button name="6" className="is-num" onClick={handleClick}>
        6
      </button>
      <button name="1" className="is-num" onClick={handleClick}>
        1
      </button>
      <button name="2" className="is-num" onClick={handleClick}>
        2
      </button>
      <button name="3" className="is-num" onClick={handleClick}>
        3
      </button>
    </div>
  );
}

export default App;
