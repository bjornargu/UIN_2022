import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSlug, getMovies } from '../lib/movieService'

export default function Actors() {
  const [slugState, setSlugState] = useState([])
  const [movieState, setMovieState] = useState([])

  useEffect(() => {
    const getSlugData = async () => {
      const slugs = await getSlug()
      setSlugState(slugs)
    }
    getSlugData()
  }, [])

  useEffect(() => {
    const getMovieData = async () => {
      const movies = await getMovies()
      setMovieState(movies)
    }
    getMovieData()
    // console.log(movieState)
  }, [])
  console.log(slugState)

  return (
    <>
      <h1>Actors:</h1>
      <ul>
        {movieState.map((actor) => (
          <li key={actor.movie}>
            <Link to={`${slugs.slug.current}`}>{actor.movie}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// {`${}`}
