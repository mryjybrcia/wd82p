import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Wake Up!", important: false },
    { id: 2, text: "Coffee", important: false },
    { id: 3, text: "Code", important: false },
  ]);
  // Functions
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      text: newNote,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  // Return results
  return (
    <div>
      <h1>
        Notes{" "}
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Important" : "Show All"}
        </button>
      </h1>

      <ul>
        {notesToShow.map((note, index) => (
          <Note key={note.id} note={note.text} />
        ))}
      </ul>
      <form onSubmit={addNote} onChange={handleNoteChange}>
        <input value={newNote} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
