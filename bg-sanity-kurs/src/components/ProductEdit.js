import { useParams } from 'react-router-dom'

export default function ProductEdit() {
  const { id } = useParams()

  return (
    <article>
      <h1>Side for å redigere produkt med produkt id {id}</h1>
    </article>
  )
}
