import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (movie) => {
        if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter((m) => m.imdbID !== movieId));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoriteContext);
}
