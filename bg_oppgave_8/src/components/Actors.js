import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/movieService'

export default function Actors() {
  const [data, setData] = useState([])

  useEffect(() => {
    // setData({ title: 'Batman', actor: 'Bruce' })
    const getActorData = async () => {
      const actors = await getActors()
      console.log(actors)
      setData(actors)
    }
    getActorData()
  }, [])

  return (
    <>
      <h1>Actors:</h1>
      <ul>
        {data.map((actor) => (
          <li key={actor.fullname}>
            <Link to={`${actor.slug.current}`}>{actor.fullname}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// {`${}`}
