// importerer klienten:
import client from './client'

// const fields = `
//     title,
//     `

// fields kan brukes for å legge inn flere felter som parameter

// {${fields}} - brukes for å referere til fields som parameter
// i GREQ spørringen

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{title}`)
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{fullname, slug}`)
  return data
}
