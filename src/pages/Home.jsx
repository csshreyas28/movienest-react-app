import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Interstellar", release_date: "2013" },
        { id: 2, title: "Inception", release_date: "2010" },
        { id: 3, title: "The Dark Knight", release_date: "2008" },
        { id: 4, title: "The Matrix", release_date: "1999" },
        { id: 5, title: "The Shawshank Redemption", release_date: "1994" },
        { id: 6, title: "Pulp Fiction", release_date: "1994" },
        { id: 7, title: "The Godfather", release_date: "1972" },
        { id: 8, title: "Forrest Gump", release_date: "1994" },
        { id: 9, title: "Fight Club", release_date: "1999" },
        { id: 10, title: "The Lord of the Rings: The Return of the King", release_date: "2003" },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("------------");
    }

    return (
        <>
            <div className="home">

                <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="search-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
                </form>

                <div className="movies-grid">
                    {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        </>
    );
}

export default Home;