import React, { useState } from "react";

function SearchForm({ search }) {
  const [searchValue, setSearchValue] = useState("");
  const handledSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    setSearchValue();
  };

  return (
    <div>
      <form className="form" onSubmit={handledSearch}>
        <label htmlFor="query" className="label">
          {" "}
        </label>
        <input
          type="text"
          value={searchValue}
          className="input"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={`Search for Paris or Canada`}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
