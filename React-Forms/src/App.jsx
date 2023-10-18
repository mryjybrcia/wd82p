import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Wake Up!" },
    { id: 2, text: "Coffee" },
    { id: 3, text: "Code" },
  ]);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      text: newNote,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {notes.map((note, index) => (
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
