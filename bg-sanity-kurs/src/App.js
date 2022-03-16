import { getEvents, getEvent } from './utils/eventService'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getEventsData = async () => {
    const events = await getEvents()
    console.log(events)
  }

  const getEventData = async () => {
    const slug = 'event-1'
    const event = await getEvent(slug)
    console.log(event)
  }

  return (
    <main>
      <button type="button" onClick={getEventsData}>
        Hent data
      </button>
      <button type="button" onClick={getEventData}>
        Hent data om et event
      </button>
    </main>
  )
}
