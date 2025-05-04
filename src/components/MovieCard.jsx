import '../css/MovieCard.css';
import { useFavorites } from "../context/FavoriteContext";
import { useState } from "react";
import Toast from "./Toast";

function MovieCard({ movie }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const [toast, setToast] = useState({ visible: false, message: "" });

    const isFavorite = favorites.some((m) => m.imdbID === movie.imdbID);

    function showToast(message) {
        setToast({ visible: true, message });
        setTimeout(() => {
            setToast({ visible: false, message: "" });
        }, 2500);
    }

    function onFavoriteClick() {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
            showToast("❌ Removed from favorites");
        } else {
            addFavorite(movie);
            showToast("💓 Added to favorites");
        }
    }

    return (
        <>
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

            {/* Toast at component level */}
            <Toast message={toast.message} visible={toast.visible} />
        </>
    );
}

export default MovieCard;
