
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api";
import '../css/Home.css';

const defaultPopularTitles = [
    "Inception", "Interstellar", "The Dark Knight", "Avengers: Endgame",
"Terminator", "Guardians of the Galaxy", "Fast and Furious", "Daredevil"

];

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            const allResults = [];

            for (let title of defaultPopularTitles) {
                const results = await fetchMovies(title);
                if (results.length > 0) {
                    allResults.push(results[0]);
                }
            }

            setMovies(allResults);
            setLoading(false);
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        const results = await fetchMovies(searchQuery);
        setMovies(results);
        setNoResults(results.length === 0);
        setLoading(false);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <p className="loading-text">Loading movies...</p>}

            {!loading && noResults && (
                <div className="no-results">
                    <h3>No movies found</h3>
                    <p>Try searching for something else</p>
                </div>
            )}

            <div className="movies-grid">
                {!loading && movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;
