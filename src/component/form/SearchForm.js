import React from "react";

function SearchForm() {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          {" "}
          Search
        </label>
        <input
          type="text"
          name="query"
          className="input"
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
