//Dhamma School Events page

'use client'
import EventContainer from './eventContainer'
import EventNavigation from './navigation'
import events from '@/app/dhammaSchool/data/events.json'

const DhammaSchoolEventsPage = () => {
  return (
    <>
      <EventNavigation />
      <div className="bg-white pb-12">
        <div className="container mx-auto flex justify-between items-center pl-20 pr-20">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {events.length ? (
              events.map((event) => (
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
