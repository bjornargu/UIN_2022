import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getActors, getMoviesByActor } from '../lib/movieService'
// import { getActors } from '../lib/movieService'

export default function Name() {
  const [actorData, setActorData] = useState()
  const [data, setData] = useState()
  const { name } = useParams()

  useEffect(() => {
    const getActorData = async () => {
      const actor = await getActors()
      setActorData(actor)
    }
    getActorData()
    const getMoviesByActorData = async () => {
      const info = await getMoviesByActor(name)
      setData(info)
    }
    getMoviesByActorData()
  }, [])


  const currentActor = actorData?.find((actors) => actors.slug === name)
  console.log(data)
  // Får opp ønsket resultat fra denne console log'en, men får ikke skrevet det inn i p-taggen under

  return (
    <article>
      <h1>{currentActor?.fullname}</h1>
      <p>Acts in: {data?.title}</p> 
    </article>
  )
}
