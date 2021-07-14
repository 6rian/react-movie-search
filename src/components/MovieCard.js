import React from 'react';
import './MovieCard.css'

export default function MovieCard(props) {
  const image = `https://www.themoviedb.org/t/p/w1280${props.movie.poster_path}`;

  return (
    <div className="movie-card">
      <div className="movie-card--image">
        <img
          src={image}
          alt={props.movie.title}
        />
      </div>
      <h2 className="movie-card--title">{props.movie.title}</h2>
      <p>Released: {props.movie.release_date}</p>
      <p>Vote Average: {props.movie.vote_average} / 10</p>
      <p>{props.movie.overview}</p>
    </div>
  );
}