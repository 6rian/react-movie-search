import React, {useState} from 'react';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit: ' + query);
  }

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchForm query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="search-results">
        <div className="search-results--movie-card">
          <img
            src="https://www.themoviedb.org/t/p/w1280/9i3plLl89DHMz7mahksDaAo7HIS.jpg"
            className="search-results--image"
            alt="Jurassic Park"
          />
          <h2 className="search-results--title">Jurassic Park</h2>
          <p>Released: 1993-06-11</p>
          <p>Vote Average: 7.9 / 10</p>
        </div>
      </div>
    </div>
  );
}

export default App;
