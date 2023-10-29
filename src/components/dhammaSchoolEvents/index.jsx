//Dhamma School Events Page

import EventContainer from './eventContainer'
import EventNavigation from './navigation'

const DhammaSchoolEventsPage = () => {
  // Define event data as an array
  const events = [
    {
      imageSrc: '/static/worship.png',
      imageAlt: 'Image of a person worshipping',
      title: 'Poya day sill',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namhtht vehicula libero',
    },

    {
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
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {events.map((event, index) => (
              <EventContainer key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DhammaSchoolEventsPage
