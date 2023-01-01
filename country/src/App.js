import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleSearchForm = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div id="app">
      <SearchForm handleSearchForm={handleSearchForm} search={search} />
      <Results data={data} search={search} />
    </div>
  );
}

export default App;
