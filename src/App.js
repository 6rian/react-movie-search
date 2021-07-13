import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Movie Search</h1>
      <form>
        <input type="search" name="query" />
        <button type="submit">Search</button>
      </form>
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
