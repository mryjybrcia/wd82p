import { useState } from "react";
import "./App.css";
import History from "./components/History";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  // these are ok
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 };

    setClicks(newClicks);
    setAllClicks(allClicks.concat("L"));
    setTotal(newClicks.left + newClicks.right);
  };

  // setClicks(newClicks);
  // console.log("left before", clicks.left);

  // console.log("left after", clicks.left);
  // setTotal(clicks.left + clicks.right);
  // }
  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 };
    setClicks(newClicks);
    setAllClicks(allClicks.concat("R"));
    setTotal(newClicks.left + newClicks.right);
    //   left: clicks.left,
    //   right: clicks.right + 1,
    // };

    // setClicks(newClicks);
    // // console.log("right before", clicks.right);

    // // console.log("right after", clicks.right);
    // setTotal(clicks.left + clicks.right);
  };
  return (
    <div>
      <Display value={clicks.left} />
      <Button onClick={handleLeftClick} text="Left" />
      <Display value={clicks.right} />
      <Button onClick={handleRightClick} text="Right" />
      <History allClicks={allClicks} />
      <Display value={total} />
    </div>
  );
}

export default App;
