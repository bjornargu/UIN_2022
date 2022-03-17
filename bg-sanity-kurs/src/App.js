import { Route, Routes } from 'react-router-dom'
// import { getEvents, getEvent } from './utils/eventService'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import Product from './components/Product'
import ProductEdit from './components/ProductEdit'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  // const getEventsData = async () => {
  //   const events = await getEvents()
  //   console.log(events)
  // }

  // const getEventData = async () => {
  //   const slug = 'event-1'
  //   const event = await getEvent(slug)
  //   console.log(event)
  // }

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hjem" element={<Home />} />
          <Route path="/produkter">
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
            <Route path=":id/edit" element={<ProductEdit />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {/* <main>
        <button type="button" onClick={getEventsData}>
          Hent data
        </button>
        <button type="button" onClick={getEventData}>
          Hent data om et event
        </button>
      </main> */}
    </>
  )
}
