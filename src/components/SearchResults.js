import React from 'react';
import MovieCard from './MovieCard';
import './SearchResults.css';

export default function SearchResults(props) {
  if (!props.results) {
    return '';
  }

  const movieCards = props.results.map(movie => <MovieCard key={movie.id} movie={movie} />);

  return (
    <div className="search-results">
      {movieCards}
    </div>    
  );
}