import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hjem">Hjem</Link>
        </li>
        <li>
          <Link to="/about">Om</Link>
        </li>
        <li>
          <Link to="/produkter">Produkter</Link>
        </li>
      </ul>
    </nav>
  )
}
