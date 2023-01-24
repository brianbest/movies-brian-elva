import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieList from './MovieList';
import movies from './movies.json';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Elva and Brian's Movie Diary</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Add Movie</a></li>
            <li><a href="#">View Diary</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </nav>
      </header>

      <section id="welcome">
        <h2>Welcome to My Movie Diary</h2>
        <p>Here you can keep track of the movies you've watched and add your thoughts and ratings.</p>
      </section>

      <section id="add-movie">
        <h2>Add a Movie</h2>
        <form>
          <label for="movie-title">Movie Title:</label>
          <input type="text" id="movie-title" name="movie-title" required />
          <br />
          <label for="movie-year">Movie Year:</label>
          <input type="text" id="movie-year" name="movie-year" required />
          <br />
          <label for="movie-director">Movie Director:</label>
          <input type="text" id="movie-director" name="movie-director" required />
          <br/>
          <label for="movie-rating">Movie Rating:</label>
          <select id="movie-rating" name="movie-rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br/>
          <label for="movie-notes">Movie Notes:</label>
          <textarea id="movie-notes" name="movie-notes"></textarea>
          <br/>
          <input type="submit" value="Add Movie" />
        </form>
      </section>

      <section id="view-diary">
        <h2>View My Diary</h2>
        <MovieList movies={movies.movies} />
      </section>
    </div>
  )
}

export default App
