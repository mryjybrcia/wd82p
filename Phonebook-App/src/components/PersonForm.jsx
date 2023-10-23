import axios from "axios";
import { useState } from "react";
import personService from "../services/persons";

function PersonForm({ persons, setPersons, setResults, setNotification }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    // axios.post("http://localhost:3001/Persons", newPerson).then((response) => {
    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setResults(persons.concat(returnedPerson));
      setNotification(`Added ${returnedPerson.name}`);
      setNewName("");
      setNewNumber("");
    });
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
