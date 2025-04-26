const CLIENT_ID = "933db5b16387dec954c67d061279c929cb52ec401b11d813b50cdc76f188252b";
const BASE_URL = "https://api.trakt.tv";

const HEADERS = {
  "Content-Type": "application/json",
  "trakt-api-version": "2",
  "trakt-api-key": CLIENT_ID
};

// Get popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/popular`, {
    headers: HEADERS
  });

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data = await response.json();
  // Trakt returns an array of objects with movie info nested inside
  return data.map(item => item.movie); // Flatten it like TMDb's `results`
};

// Search movies by name
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    headers: HEADERS
  });

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();
  return data.map(item => item.movie); // Flatten the results
};
