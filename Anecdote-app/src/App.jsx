import { useState } from "react";
import "./App.css";

function App() {
  const [anecdotes, setAnecdotes] = useState([
    {
      text: "I was extremely honoured and privileged to have had the opportunity to visit Oxford University. It was a great experience to share personal anecdotes from my career and my journey and to indulge in a fun interactive session with the students there.",
      votes: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "I get verbal diarrhea in the writers room. I just tell everyone a million anecdotes and stories and craziness, and we all double up on the floor laughing.",
      votes: 0,
    },
    {
      text: "I grew up in a society where everything you did was eavesdropped on, recorded, snitched on. I had friends when we were kids getting into trouble for telling anecdotes about Communist leaders.",
      votes: 0,
    },
    {
      text: "I was kind of reflecting on my life and certain experiences, and you know, when I am teaching and coaching my partners on Dancing With the Stars I sort of use those stories and anecdotes to help them sort of overcome certain fears.",
      votes: 0,
    },
    {
      text: "Premature optimization is the root of all evil!",
      votes: 0,
    },
    {
      text: "If it hurts, do it more often!",
      votes: 0,
    },
    {
      text: "The only way to go fast , is to go well",
      votes: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));
  };

  const handleVote = () => {
    const newAnecdotes = anecdotes.map((anecdote, index) => {
      if (index === selected) {
        return {
          ...anecdote,
          votes: anecdote.votes + 1,
        };
      }
      return anecdote;
    });
    setAnecdotes(newAnecdotes);
  };

  const findAnecdoteWithMostVotes = () => {
    const anecdotesWithMostVotes = anecdotes.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );

    return anecdotesWithMostVotes;
  };
  return (
    <div>
      <h1>Anecdote of the Day</h1>

      <p>{anecdotes[selected].text}</p>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>

      <p>{findAnecdoteWithMostVotes().text}</p>
      <p>has {findAnecdoteWithMostVotes().votes} votes</p>
    </div>
  );
}

export default App;
