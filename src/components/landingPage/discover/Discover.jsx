'use client'
import { useRouter } from 'next/navigation'
import { DHAMMA_SCHOOL, GALLERY } from '@/consts/consts'

export default function Discover() {
  const router = useRouter()

  const load = () => {
    alert('Image loaded')
  }

  return (
    <div className="bg-white text-black">
      <marquee
        hspace="0"
        className="invisible xl:visible bg-[#E35F00] h-7 text-white align-middle"
      >
        සාදරයෙන් පිළිගනිමු! මෙය ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරස්ථානයේ නිල වෙබ් අඩවියයි
      </marquee>
      <div className="relative bg-white w-full flex justify-end w-9/12">
        <img
          className="w-9/12"
          src="./static/templeImage.jpg"
          alt="discover image"
          // loading='lazy'
          onLoadingComplete={load}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-25% to-transparent"></div>

        <div className="absolute inset-0 w-11/12 xl:w-8/12 pl-10 xl:pl-32 ">
          <h1 className="text-sm xl:text-3xl my-2 xl:my-10 font-bold text-black text-black">
            ශ්‍රී සුදර්ශනාරාම <br />පුරාණ විහාරය
          </h1>
          <p className=" hidden sm:flex  text-xs xl:text-lg w-1/2">
            මාලබේ පිට්ටුගල ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරස්ථානය වසර 300කට අධික
            ඉතිහාසයකට උරුමකම් කියන ශ්‍රී ලංකාවේ සංස්කෘතික හා ආගමික උරුමයේ
            ගෞරවනීය සාක්ෂියක් ලෙස පවතී. මාලඹේ නගරයේ පිහිටා ඇති මෙම පුරාණ විහාරය
            ඉදිරි පරම්පරාවන් සඳහා ආධ්‍යාත්මික ඥානාලෝකය ලබාදෙන සහ සංස්කෘතික
            පොහොසත්කමේ ආලෝකයක් ලෙස පවතී
          </p>
          <div className=" w-6/12 sm:w-8/12 xl:w-1/2 flex flex-col sm:flex-row  sm:space-x-2 xl:space-x-6 mt-2 xl:mt-20 ">
            <button
              onClick={() => {
                router.push('/dhammaSchool')
              }}
              className="bg-[#740000] text-xs rounded-full py-1 sm:px-2 xl:px-6 xl:py-3  my-1 text-white"
            >
              {DHAMMA_SCHOOL}
            </button>
            <button
              onClick={() => {
                router.push('/gallery')
              }}
              className="rounded-full text-xs font-semibold py-1 text-[#740000] my-1 border-[1px] xl:border-2 border-[#740000] sm:px-2 xl:px-6 md:py-3"
            >{GALLERY}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
