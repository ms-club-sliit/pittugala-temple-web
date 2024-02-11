import EventContainer from '@/components/dhammaSchoolEvents/eventContainer'
import events from './data/events.json'
import { DHAMMA_SCHOOL_HEADER } from '@/consts/consts'

const DhammaSchoolPage = () => {

  const filteredEvents = events.filter(event => event.category === "Dhamma School");

  return (
    <div className="bg-white py-8">
      <div className="text-black container mx-auto px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-4xl lg:text-5xl mb-4 leading-normal">
            {DHAMMA_SCHOOL_HEADER}
          </p>
        </div>
        <div className="block my-12">
          <div className="h-72 w-full bg-gray-300"></div>
        </div>
        <div className="block my-12">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            vehicula libero nec augue molestie, non interdum tellus porttitor.
            Sed non ultrices dui. Cras auctor porttitor turpis in feugiat.
            Integer feugiat, ipsum quis commodo pharetra, nisl felis bibendum
            libero, eu congue libero nisl et nulla. Morbi a interdum diam, ut
            elementum sem. Phasellus vulputate egestas lacus a ultricies. Proin
            vestibulum tempus quam ac condimentum. Vivamus at nibh quis tortor
            posuere vehicula ut sit amet augue. Quisque risus enim, tristique at
            dolor nec, hendrerit hendrerit massa. In lib
          </p>
        </div>
        <div className="block my-12">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredEvents.length ? (
              filteredEvents.map((event) => (
                <EventContainer key={event.id} event={event} />
              ))
            ) : (
              <p className="flex justify-center">No events to display for the selected category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DhammaSchoolPage
