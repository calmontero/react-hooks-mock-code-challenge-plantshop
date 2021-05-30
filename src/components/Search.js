import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
