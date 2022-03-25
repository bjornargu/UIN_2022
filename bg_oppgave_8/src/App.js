import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Actors from './components/Actors'
import Name from './components/Name'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors">
          <Route index element={<Actors />} />
          <Route path=":name" element={<Name />} />
        </Route>
      </Routes>
    </>
  )
}

