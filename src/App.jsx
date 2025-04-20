import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const movieNumber = 1;

  return (
    <> 
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "Interstellar", release_date: "2013"}}/>
     ) : (<MovieCard movie={{title: "Kal Ho Na Ho", release_date: "2009"}}/>
    )}
    </>
  )
}

export default App
