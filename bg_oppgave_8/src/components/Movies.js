import { useEffect, useState } from 'react'
import { getMovies } from '../lib/movieService'

export default function Movies(title, actor) {
  const [data, setData] = useState([])

  useEffect(() => {
    const getMovieData = async () => {
      const movies = await getMovies()
      setData(movies)
    }
    getMovieData()
  }, [])

  return (
    <div>
      <h1>Movies:</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}
