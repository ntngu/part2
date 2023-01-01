import View from "./View";

const Results = ({ data, search }) => {
  const countriesToShow = () => {
    return data.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  };
  if (countriesToShow().length >= 10 && search !== "") {
    return (
      <div className="results">Please specify search, too many results.</div>
    );
  } else if (search === "") {
    return <div className="results"></div>;
  } else if (
    countriesToShow().length < 10 &&
    countriesToShow().length != 1 &&
    search !== ""
  ) {
    return (
      <div className="results">
        {countriesToShow().map((country) => (
          <div key={country.name.common}>
            {country.name.common}{" "}
            <View show={false} country={country} single={false} />
          </div>
        ))}
      </div>
    );
  } else if (countriesToShow().length === 1 && search !== "") {
    const country = countriesToShow()[0];
    return <View show={true} country={country} single={true} />;
  }
};

export default Results;
