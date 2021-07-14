import React from 'react';

export default function SearchForm(props) {
  const {query, handleChange, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        value={query}
        onChange={handleChange}
        className="search-form--query"
      />
      <button className="search-form--button" type="submit">Search</button>
    </form>
  );
};