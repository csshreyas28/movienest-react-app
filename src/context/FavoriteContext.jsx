import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (movie) => {
        if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoriteContext);
}
