'use client'
import { useRouter } from 'next/navigation'
export default function Discover() {
  const router = useRouter()
  return (
    <div className="bg-white">
      <marquee hspace="0" className="bg-[#E35F00] h-7 text-white align-middle">
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
        <div className="absolute inset-0 w-8/12 pl-32 ">
          <h1 className="text-3xl my-10 font-bold">
            Sri Sudarmaramaya <br /> Temple
          </h1>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            tempora, quibusdam nemo, nulla quisquam explicabo optio blanditiis
            at sunt aliquid quod eos atque expedita. Voluptate deserunt mollitia
            ut eaque veniam?
          </p>
          <div className="w-1/2 flex space-x-6 mt-20 ">
            <button
              onClick={() => {
                router.push('/dhamma-school')
              }}
              className="bg-[#740000] rounded-full px-6 py-3 text-white"
            >
              Dhamma School
            </button>
            <button
              onClick={() => {
                router.push('#')
              }}
              className="rounded-full font-semibold text-[#740000] border-2 border-[#740000] px-6 py-3"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
