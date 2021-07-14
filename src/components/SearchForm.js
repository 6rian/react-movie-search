import React from 'react';
import './SearchForm.css';

export default function SearchForm(props) {
  const {query, handleChange, handleSubmit} = props;

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        value={query}
        onChange={handleChange}
        className="search-form--query"
        placeholder="Search by Title"
      />
      <button className="search-form--button" type="submit">Search</button>
    </form>
  );
};