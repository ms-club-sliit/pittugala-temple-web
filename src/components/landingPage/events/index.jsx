import Image from 'next/image'
export default function index() {
  const events = [
    {
      id: 1,
      src: '/static/events.png',
      topic: 'Poya day sill',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
    {
      id: 2,
      src: '/static/events.png',
      topic: 'Poya day sill',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
    {
      id: 3,
      src: '/static/events.png',
      topic: 'Poya day sill',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
    {
      id: 4,
      src: '/static/events.png',
      topic: 'Poya day sill',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero',
    },
  ]

  return (
    <div className="p-8 hidden sm:flex flex-col place-items-center w-full ">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <div className="  grid grid-cols-4   w-11/12 drop-shadow">
        {events.map((event) => (
          <div key={event.id} className=" rounded-sm w-72 bg-[#FEF9F5]">
            <Image
              src={event.src}
              width={500}
              height={500}
              alt="Event Image"
              className="mb-2 md:mb-4 w-full h-20 lg:h-48 object-cover rounded-md"
            />

            <div className="p-2">
              <h2 className=" text-lg md:text-2xl font-medium mb-2 md:mb-4">
                {event.topic}
              </h2>
              <p className="mb-4 hidden md:flex">{event.dis}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md  ">
          Find out more <span className="text-xl">&rsaquo;</span>
        </button>
      </div>
    </div>
  )
}