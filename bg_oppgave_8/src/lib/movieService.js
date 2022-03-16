// importerer klienten:
import client from './client'

// const eventFields = `
//   title,
//   'slug': slug.current,
//   preAmble,
//   'category': category->title,
// `

// export const getEvents = async () => {
//   const data = await client.fetch(`*[_type == "event"]{${eventFields}}`)
//   return data
// }

// export const getEvent = async (slug) => {
//   const data = await client.fetch(
//     `*[_type == "event" && slug.current == $slug]{${eventFields}}`,
//     { slug }
//   )
//   return data
// }

const fields = `
    title,
    fullname,
    'slug': slug.current,
    `

export const getEvent = async () => {
  const data = await client.fetch(
    `*[_type == "movie" || _type == "actor"]{${fields}}`
  )
  return data
}
