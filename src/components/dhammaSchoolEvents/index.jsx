//Dhamma School Events page

'use client'
import EventContainer from './eventContainer'
import EventNavigation from './navigation'

const DhammaSchoolEventsPage = () => {
  // Define event data as an array
  const events = [
    {
      id: 1, // Unique ID
      imageSrc: '/static/worship.png',
      imageAlt: 'Image of a person worshipping',
      title: 'Poya day sill',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namhtht vehicula libero',
    },
    {
      id: 2, // Unique ID
      imageSrc: '/static/worship.png',
      imageAlt: 'Image of a person worshipping',
      title: 'Poya day sill',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namhtht vehicula libero',
    },
    // Add more events as needed
  ]

  return (
    <>
      <EventNavigation />
      <div className="bg-white">
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
