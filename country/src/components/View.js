import { useState } from "react";
import Weather from "./Weather";

const View = ({ show, country, single }) => {
  const [showCountry, setShow] = useState(show);
  const languages = Object.values(country.languages);

  if (showCountry === false) {
    return (
      <div className="results">
        <button onClick={() => setShow(!showCountry)}>show</button>
        <div className="results"></div>
      </div>
    );
  } else if (single === true) {
    return (
      <div className="results">
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital[0]}
          <br></br>
          area {country.area}
        </p>
        <h3>languages</h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
        <Weather country={country} />
      </div>
    );
  } else {
    return (
      <div className="results">
        <button onClick={() => setShow(!showCountry)}>hide</button>
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital[0]}
          <br></br>
          area {country.area}
        </p>
        <h3>languages</h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    );
  }
};

export default View;
