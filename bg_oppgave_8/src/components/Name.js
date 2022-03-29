// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovies } from '../lib/movieService'
// import { getActors } from '../lib/movieService'

export default function Name() {
  //   const [data, setData] = useState([])
  const { name } = useParams()
  const actorList = getMovies()
  console.log(actorList)
  const actor = actorList?.map((actors) => actors.movie === name)
  // console.log(getMovies())

  return (
    <article>
      <h1>Actorname</h1>
      <p>Information about the actor</p>
    </article>
  )
}
