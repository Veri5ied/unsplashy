import React, { useState } from "react";
import Card from "../cards/Card";

function SearchForm({ fetchPictures }) {
  const [pictures, setPictures] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPictures(e, pictures);
    setPictures("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="query" className="label">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          onChange={(e) => setPictures(e.target.value)}
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
