import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <> 
    <MovieCard movie={{title: "Interstellar", release_date: "2013"}}/>
    <MovieCard movie={{title: "Kal Ho Na Ho", release_date: "2009"}}/>

   </>
  )
}

export default App
