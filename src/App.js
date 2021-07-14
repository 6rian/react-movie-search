import React, {useState, useEffect} from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import moviesData from './data/movies.json';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(moviesData.results);
  }, []);

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
      <SearchResults results={results} />
    </div>
  );
}

export default App;
