import React from 'react';

export default function MovieCard(props) {
  const image = `https://www.themoviedb.org/t/p/w1280${props.movie.poster_path}`;

  return (
    <div className="movie-card">
      <img
        src={image}
        className="movie-card--image"
        alt="{props.movie.title}"
      />
      <h2 className="movie-card--title">{props.movie.title}</h2>
      <p>Released: {props.movie.release_date}</p>
      <p>Vote Average: {props.movie.vote_average} / 10</p>
      <p>{props.movie.overview}</p>
    </div>
  );
}