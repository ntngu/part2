import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "" || newNumber === "") {
      alert("Please enter a name or number.");
    } else if (persons.find((person) => newName === person.name)) {
      const temp = persons.find((person) => newName === person.name);
      const changedPerson = { ...temp, number: newNumber };
      if (
        window.confirm(
          `${changedPerson.name} is already in the phonebook, update number?`
        )
      ) {
        personService
          .update(changedPerson.id, changedPerson)
          .catch((error) => alert("Could not submit..."))
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };
      personService
        .create(personObject)
        .then(
          setPersons(persons.concat(personObject)),
          setNewName(""),
          setNewNumber("")
        );
    }
  };

  const removePerson = (person) => {
    if (window.confirm(`Do you want to remove ${person.name}?`)) {
      personService
        .remove(person.id)
        .catch((error) => alert(`${person.name} was already removed...`))
        .then(setPersons(persons.filter((p) => p.id !== person.id)));
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} remove={removePerson} />
    </div>
  );
};

export default App;
