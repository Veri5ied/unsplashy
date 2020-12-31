import React, { useState } from "react";


function SearchForm() {
  const [query, setQuery] = useState("");
  const [pictures, setPictures] = useState([]);

 
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
