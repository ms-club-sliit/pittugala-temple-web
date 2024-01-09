//Reusable event container

import Image from 'next/image'

const EventContainer = ({ event }) => {
  if (event.title && event.title.length > 45) {
    event.title = event.title.substring(0, 45) + '...'
  }

  if (event.description && event.description.length > 50) {
    event.description = event.description.substring(0, 50) + '...'
  }

  return (
    <div className="relative bg-[#FEF9F5] p-4 rounded-[3px]">
      <Image
        src={event.imageSrc}
        alt={event.imageAlt}
        className="object-cover rounded-bl-[3px] rounded-br-[3px] md:h-[186px] h-auto w-full"
        width={500}
        height={500}
      />
      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-base text-black-900 mt-5 font-semibold">
            {event.title}
          </p>
          <p className="mt-5">{event.description}</p>
          <div className="flex justify-center mt-5">
            <button className="bg-red-900 font-semibold h-10 flex justify-center w-full sm:px-5 px-[35px] py-[11px] rounded-[3px] text-sm text-white">
              View Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventContainer
