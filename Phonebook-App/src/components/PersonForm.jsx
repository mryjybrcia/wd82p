import { useState } from "react";

function PersonForm({ persons, setPersons, setResults }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    setResults(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };
  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);

  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handleNewName} required />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNewNumber} required />
      </div>
      <button type="submit">add</button>
    </form>
  );
}

export default PersonForm;
