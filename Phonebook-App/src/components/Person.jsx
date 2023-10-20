import personService from "../services/persons";

function Person({ person, persons, results, setPersons, setResults }) {
  const { id, name, number } = person;

  const handleDelete = (id) => {
    personService.deletePerson(id).then((response) => {
      if (response.status === 200) {
        const updatedPersons = persons.filter((person) => person.id !== id);

        setPersons(updatedPersons);
        setResults(updatedPersons);
      } else {
        console.log("No such contact");
      }
    });
  };
  return (
    <li>
      <button onClick={() => handleDelete(id)}>x</button>
      {name} {number}
    </li>
  );
}

export default Person;
