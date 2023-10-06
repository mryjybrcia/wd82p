import "./App.css";
import { useState } from "react";
import Button from "./components/button";

function App() {
  // const name = "Peter";
  // const age = 10;
  // [0, function () {}]
  const [counter, setCounter] = useState(0);
  // const btn = document.querySelector("button");

  // btn.addEventListener("click", increment);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };
  const reset = () => setCounter(0);

  // const decrement = () => {
  //   if (counter !== 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  // const reset = () => {
  //   setCounter(counter !== 0);
  // };
  // h1.textContent = h1.textContent + 1;

  return (
    <div>
      <h1>{counter}</h1>
      <Button handler={increment} text="Increment"></Button>
      <Button handler={reset} text="Reset"></Button>
      <Button handler={decrement} text="Decrement"></Button>
    </div>
  );
}

export default App;

// Passing data to a component to another
// component state
// virtual DOM
// event handlers
