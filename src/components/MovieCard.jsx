import '../css/MovieCard.css';
import { useFavorites } from "../context/FavoriteContext";

function MovieCard({ movie }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some((m) => m.imdbID === movie.imdbID);

    function onFavoriteClick() {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        {isFavorite ? "❌" : "💓"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;
