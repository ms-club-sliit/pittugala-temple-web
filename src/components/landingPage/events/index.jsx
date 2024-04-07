import { EVENTS, FIND_OUT_MORE } from '@/consts/consts'
import Link from 'next/link'
import Image from 'next/image'

export default function index() {
  const events = [
    {
      id: 1,
      src: '/static/event1.png',
      topic: 'පෝය දා බණ පිංකම ',
    },
    {
      id: 2,
      src: '/static/event2.png',
      topic: 'පෝය දා සිල් සමාදන් වැඩසටහන',
    },
    {
      id: 3,
      src: '/static/event3.png',
      topic: 'අසිරිමත් වෙසක් පොහොය වර්ණනාව.',
    },
  ]

  return (
    <div className="flex flex-col  py-10  w-full bg-bg-orange">
      <h1 className="text-4xl  text-center font-bold mb-8 text-black">
        {EVENTS}
      </h1>
      <div className=" w-full  flex items-center  justify-center sm:items-start  flex-col sm:flex-row  drop-shadow">
        {events.map((event) => (
          <div
            key={event.id}
            className=" sm:mx-2 md:mx-5 lg:mx-12 my-2 rounded-sm  w-72  bg-[#FEF9F5]"
          >
            <Image
              className="w-full object-contain h-5/6"
              src={event.src}
              width={200}
              height={100}
              alt="event image"
            />

            <div className="p-2">
              <h2 className="  sm:text-xs md:text-sm lg:text-md xl:text-lg text-center font-medium mb-2 md:mb-4 text-black">
                {event.topic}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/events"
          className="bg-orange hover:bg-light-orange text-white font-bold py-2 px-4 rounded"
        >
          {FIND_OUT_MORE} {'>'}
        </Link>
      </div>
    </div>
  )
}
