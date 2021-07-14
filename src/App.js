import React, {useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
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
      <SearchResults />
    </div>
  );
}

export default App;
