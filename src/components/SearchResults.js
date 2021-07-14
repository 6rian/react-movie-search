import React from 'react';
import './SearchResults.css';

export default function SearchResults(props) {
  return (
    <div className="search-results">
      <div className="movie-card">
        <img
          src="https://www.themoviedb.org/t/p/w1280/9i3plLl89DHMz7mahksDaAo7HIS.jpg"
          className="movie-card--image"
          alt="Jurassic Park"
        />
        <h2 className="movie-card--title">Jurassic Park</h2>
        <p>Released: 1993-06-11</p>
        <p>Vote Average: 7.9 / 10</p>
      </div>
    </div>    
  );
}