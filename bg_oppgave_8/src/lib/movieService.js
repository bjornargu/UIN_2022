// importerer klienten:
import client from './client'

const movieFields = `
    title,
    "actor": actor -> {fullname, "slug": slug.current}
    `

const actorFields = `
fullname,
"slug": slug.current
`

// const moviesByActorFields = `

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export async function getMoviesByActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->slug.current==$actor]{${movieFields}}`,
    { actor }
  )
  return data
}
