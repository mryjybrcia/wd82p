import { useState } from "react";

function Search({ persons, setResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length === 0) {
      setResults(persons);
    } else {
      const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredPersons);
    }
  };

  return (
    <div>
      filter shown with <input value={searchQuery} onChange={handleSearch} />
    </div>
  );
}

export default Search;
