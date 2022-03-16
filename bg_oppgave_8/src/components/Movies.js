import { useEffect, useState } from 'react'
import { getEvent } from '../lib/movieService'

export default function Movies(title, actor) {
  const [data, setData] = useState({})

  useEffect(() => {
    // setData({ title: 'Batman', actor: 'Bruce' })
    const getMovieData = async () => {
      const movies = await getEvent()
      //   setData(movies)
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
    <>
      {/* <button type="button">Hent filmer</button> */}
      <div>{JSON.stringify(data)}</div>
      {/* debugging JSON stringyfy */}
    </>
  )
}
