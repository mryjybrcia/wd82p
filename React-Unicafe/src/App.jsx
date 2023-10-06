import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Heading from "./components/Heading";

function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const voteGood = () => setGood(Good + 1);
  const voteNeutral = () => setNeutral(Neutral + 1);
  const voteBad = () => setBad(Bad + 1);

  const total = Good + Neutral + Bad;

  const Statistics = () => {
    if (total === 0) {
      return <p>No feedback given.</p>;
    }
    return (
      <div>
        <Display text="Good" count={Good} />
        <Display text="Neutral" count={Neutral} />
        <Display text="Bad" count={Bad} />

        <Display text="Total" count={total} />
        <Display text="Average" count={(Good - Bad) / total} />
        <Display text="Positive" count={`${(Good / total) * 100}%`} />
      </div>
    );
  };

  return (
    <div>
      <Heading text="Give Feedback" />
      <Button handleClick={voteGood} text="Good" />
      <Button handleClick={voteNeutral} text="Neutral" />
      <Button handleClick={voteBad} text="Bad" />
      <Heading text="Statistics" />
      <Statistics />
    </div>
  );
}

export default App;
