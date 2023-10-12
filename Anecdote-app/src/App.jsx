import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "I was extremely honoured and privileged to have had the opportunity to visit Oxford University. It was a great experience to share personal anecdotes from my career and my journey and to indulge in a fun interactive session with the students there.",
    "Adding manpower to a late software project makes it later!",
    "I get verbal diarrhea in the writers room. I just tell everyone a million anecdotes and stories and craziness, and we all double up on the floor laughing.",
    "I grew up in a society where everything you did was eavesdropped on, recorded, snitched on. I had friends when we were kids getting into trouble for telling anecdotes about Communist leaders.",
    "I was kind of reflecting on my life and certain experiences, and you know, when I am teaching and coaching my partners on Dancing With the Stars I sort of use those stories and anecdotes to help them sort of overcome certain fears.",
    "Premature optimization is the root of all evil!",
    "If it hurts, do it more often!",
    "The only way to go fast , is to go well",
  ];
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState();

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));
  };

  const handleVote = () => {
    points[selected] = points[selected] + 1;
    setMostVoted(findAnecdoteWithMostVotes());
  };

  const findAnecdoteWithMostVotes = () => {
    const pointsArr = Object.values(points);
    const anecdotesWithMostVotes = pointsArr.findIndex(
      (point) => point === Math.max(...pointsArr)
    );

    return anecdotesWithMostVotes;
  };
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
    </div>
  );
}

export default App;
