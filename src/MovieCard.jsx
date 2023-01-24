import './MovieCard.css';

function MovieCard({ title, year, director, poster_link }) {
    return (
    <div className="movie-card">
        <img src={poster_link} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{director}</p>
  </div>
    )
}

export default MovieCard;