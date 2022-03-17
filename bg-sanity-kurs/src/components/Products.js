import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Products() {
  return (
    <section>
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          <Link to={`${product.id}`}>Gå til produkt</Link>
        </article>
      ))}
    </section>
  )
}
