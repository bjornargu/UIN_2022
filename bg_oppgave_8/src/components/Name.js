// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Actors from './Actors'
// import { getActors } from '../lib/movieService'

export default function Name() {
  //   const [data, setData] = useState([])
  const { name } = useParams()
  console.log(Actors)
  //   actor?.find((actors) => actors.slug.current === name)

  return (
    <article>
      <h1>{actor.fullname}</h1>
      <p>Information about the actor</p>
    </article>
  )
}
