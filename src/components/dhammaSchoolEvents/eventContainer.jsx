import { VIEW_EVENT } from '@/consts/consts'
import Image from 'next/image'

const EventContainer = ({ event }) => {
  if (event.title && event.title.length > 40) {
    event.title = event.title.substring(0, 40) + '...'
  }

  if (event.description && event.description.length > 40) {
    event.description = event.description.substring(0, 40) + '...'
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
        <div className="min-h-20 border-red-600">
          <div className="h-15 md:h-10">
            <p className="text-black mt-5 font-bold">
              {event.title}
            </p>
          </div>

          <p className="mt-5 text-black">{event.description}</p>
          <div className="flex justify-center mt-5">
            <a target="_blank" rel="noopener noreferrer" href={event.link}>
              <button className="bg-red-900 font-semibold h-10 flex justify-center w-full sm:px-5 px-[35px] py-[11px] rounded-[3px] sm:text-sm text-xs text-white">
                {VIEW_EVENT}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventContainer
