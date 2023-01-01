const SearchForm = ({ search, handleSearchForm }) => {
  return (
    <div id="searchform">
      <form>
        find countries {}
        <input value={search} onChange={handleSearchForm}></input>
      </form>
    </div>
  );
};

export default SearchForm;
