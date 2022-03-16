import { getEvents } from './utils/eventService'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getEventData = async () => {
    const events = await getEvents()
    console.log(events)
  }

  return (
    <main>
      <button type="button" onClick={getEventData}>
        Hent data
      </button>
    </main>
  )
}
