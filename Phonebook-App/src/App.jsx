import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import personService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [results, setResults] = useState(persons);
  const [notification, setNotification] = useState("");

  // const fetchPersons = async () => {
  //   const response = await fetch("http://localhost:3001/Persons");
  //   const data = await response.json();
  //   setPersons(data);
  //   setResults(data);
  // };

  useEffect(() => {
    // axios.get("http://localhost:3001/Persons").then((response) => {
    //   setPersons(response.data);
    //   setResults(response.data);
    // });
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setResults(initialPersons);
    });
  }, []);

  return (
    <div>
      <h1 className="App">Phonebook App</h1>
      <Notification notification={notification} />
      <Search persons={persons} setResults={setResults} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setResults={setResults}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <ul>
        {results.map((person) => (
          <Person
            key={person.id}
            person={person}
            persons={persons}
            setPersons={setPersons}
            setResults={setResults}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
