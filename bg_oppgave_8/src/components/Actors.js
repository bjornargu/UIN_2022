import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/movieService'

export default function Actors() {
  const [data, setData] = useState()

  useEffect(() => {
    const getActorData = async () => {
      const actor = await getActors()
      setData(actor)
    }
    getActorData()
  }, [])

  return (
    <>
      <h1>Actors:</h1>
      <ul>
        {data?.map((actor) => (
          <li key={actor.fullname}>
            <Link to={`${actor.slug}`}>{actor.fullname}</Link>
            </li>
        ))}
      </ul>
    </>
  )
}

// {`${}`}
