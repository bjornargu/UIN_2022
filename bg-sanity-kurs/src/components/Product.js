import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function Product() {
  const { id } = useParams()

  const product = products.find((product) => product.id === id)

  return (
    <article>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <ul>
      <li><Link to="/produkter">Tilbake til liste med produkter</Link></li>
      <li><Link to="edit">Rediger produkt</Link></li>
      </ul>
    </article>
  )
}
