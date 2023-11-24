'use client'
import { useRouter } from 'next/navigation'
export default function Discover() {
  const router = useRouter()
  return (
    <div className="bg-white">
      <marquee
        hspace="0"
        className="invisible xl:visible bg-[#E35F00] h-7 text-white align-middle"
      >
        Welcome! This is the official website of Sri Sudarmaramaya Temple,
        Malabe, Colombo.
      </marquee>
      <div className="relative bg-white w-full flex justify-end">
        <img
          className="w-7/12 "
          src="./static/discover.png"
          alt="discover image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-45% to-transparent"></div>
        <div className="absolute inset-0 w-11/12 xl:w-8/12 pl-10 xl:pl-32 ">
          <h1 className="text-sm xl:text-3xl my-2 xl:my-10 font-bold">
            Sri Sudarmaramaya <br /> Temple
          </h1>
          <p className="w-full  text-xs xl:text-lg xl:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit aut animi, aspernatur ducimus dolorem inventore
            temporibus, libero nam in possimus accusantium facere quod non dicta
            voluptatem laboriosam
          </p>
          <div className="w-8/12 xl:w-1/2 flex space-x-2 xl:space-x-6 mt-2 xl:mt-20 ">
            <button
              onClick={() => {
                router.push('/dhamma-school')
              }}
              className="bg-[#740000] text-xs rounded-full px-2 xl:px-6 xl:py-3 text-white"
            >
              Dhamma School
            </button>
            <button
              onClick={() => {
                router.push('#')
              }}
              className="rounded-full text-xs font-semibold text-[#740000] border-[1px] xl:border-2 border-[#740000] px-2 xl:px-6 md:py-3"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
