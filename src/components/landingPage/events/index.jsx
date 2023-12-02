import Link from 'next/link'

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
    <div className="p-8  place-items-center justify-center w-full bg-white ">
      <h1 className="text-4xl text-center font-bold mb-8 text-black">Events</h1>
      <div className="  flex  flex-col sm:flex-row justify-center drop-shadow">
        {events.map((event) => (
          <div
            key={event.id}
            className=" mx-2 my-2 rounded-sm w-72  bg-[#FEF9F5]"
          >
            <img
              className="w-full object-contain h-5/6"
              src={event.src}
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
          Find out more {'>'}
        </Link>
      </div>
    </div>
  )
}
