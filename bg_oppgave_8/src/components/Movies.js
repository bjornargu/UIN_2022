import { useEffect, useState } from 'react'
import { getEvent } from '../lib/movieService'

export default function Movies(title, actor) {
  const [data, setData] = useState([])

  useEffect(() => {
    // setData({ title: 'Batman', actor: 'Bruce' })
    const getMovieData = async () => {
      const movies = await getEvent()
      console.log(movies)
      setData(movies)
    }
    getMovieData()
  }, [])

  //   const getMovieData = async () => {
  //     const events = await getEvent()
  //     console.log(events)
  //   }

  //   getMovieData()

  return (
    <div>
      <ul>
        {data.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}
