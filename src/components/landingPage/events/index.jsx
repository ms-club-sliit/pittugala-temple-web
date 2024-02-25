import { EVENTS, FIND_OUT_MORE } from '@/consts/consts'
import Link from 'next/link'
import Image from 'next/image'

export default function index() {
  const events = [
    {
      id: 1,
      src: '/static/event1.jpg',
      topic: 'පෝය දා බණ පිංකම ',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
    {
      id: 2,
      src: '/static/event2.jpg',
      topic: 'පෝය දා සිල් සමාදන් වැඩසටහන',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
    {
      id: 3,
      src: '/static/event3.jpg',
      topic: 'පූජාවන්',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
  ]

  return (
    <div className="flex flex-col   w-full bg-white ">
      <h1 className="text-4xl  text-center font-bold mb-8 text-black">
        {EVENTS}
      </h1>
      <div className=" w-full  flex items-center justify-center sm:items-start  flex-col sm:flex-row  drop-shadow">
        {events.map((event) => (
          <div
            key={event.id}
            className=" sm:mx-2 my-2 rounded-sm  w-72  bg-[#FEF9F5]"
          >
            <Image
              className="w-full object-contain h-5/6"
              src={event.src}
              width={200}
              height={100}
              alt="event image"
            />

            <div className="p-2">
              <h2 className=" text-lg md:text-2xl text-center font-medium mb-2 md:mb-4 text-black">
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
