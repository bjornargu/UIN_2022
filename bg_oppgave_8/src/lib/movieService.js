// importerer klienten:
import client from './client'

// const fields = `
//     title,
//     `

// fields kan brukes for å legge inn flere felter som parameter

// {${fields}} - brukes for å referere til fields som parameter
// i GREQ spørringen

// hente actor via referanse: 'movie': actor -> fullname

export const getMovies = async () => {
  const data = await client.fetch(
    `*[_type == "movie"]{title, 'movie': actor -> fullname}`
  )
  return data
}

export const getSlug = async () => {
  const data = await client.fetch(`*[_type == "actor"]{slug}`)
  return data
}
