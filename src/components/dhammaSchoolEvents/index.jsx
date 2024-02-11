//Dhamma School Events page

'use client'
import { useEffect, useState } from 'react'
import EventContainer from './eventContainer'
import EventNavigation from './navigation'
import events from '@/app/dhammaSchool/data/events.json'

const DhammaSchoolEventsPage = () => {
  // Init definitions
  const [activeLink, setActiveLink] = useState('All')
  const [selectedEvents, setSelectedEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Search filter
  const filteredEvents = selectedEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Onchange activeLink listener
  useEffect(() => {
    switch (activeLink) {
      case 'All':
        return setSelectedEvents(events)

      case 'Poya Day':
        return setSelectedEvents(eventFilter('Poya Day'))

      case 'Information':
        return setSelectedEvents(eventFilter('Information'))

      case 'Katina Pooja':
        return setSelectedEvents(eventFilter('Katina Pooja'))

      case 'Bodhi Pooja':
        return setSelectedEvents(eventFilter('Bodhi Pooja'))

      case 'Charity':
        return setSelectedEvents(eventFilter('Charity'))
    }
  }, [activeLink])

  // Utils Funcs
  const eventFilter = (filter) => {
    return events.filter((item) => item.category == filter)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <EventNavigation
        activeLink={activeLink}
        setActiveLink={(activeLink) => setActiveLink(activeLink)}
        onSearch={handleSearch}
      />
      <div className="bg-white pb-12">
        <div className="container mx-auto flex justify-between items-center pl-20 pr-20">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredEvents.length ? (
              filteredEvents.map((event) => (
                <EventContainer key={event.id} event={event} />
              ))
            ) : (
              <p className="flex justify-center">No events to display.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DhammaSchoolEventsPage
