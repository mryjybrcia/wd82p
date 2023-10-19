import { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
  ]);
  const [results, setResults] = useState(persons);

  return (
    <div>
      <h1>Phonebook App</h1>
      <Search persons={persons} setResults={setResults} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setResults={setResults}
      />
      <h2>Numbers</h2>
      <ul>
        {results.map((person, index) => (
          <Person key={index} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
}

export default App;
