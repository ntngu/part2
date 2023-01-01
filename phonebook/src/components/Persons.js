const Persons = ({ persons, filter }) => {
  const personsToShow = () => {
    if (filter !== "") {
      return persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return persons;
  };

  return (
    <div>
      {personsToShow().map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
