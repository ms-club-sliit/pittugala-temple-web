'use client'
import { useContext } from 'react';
import { useRouter } from 'next/navigation'
import { DHAMMA_SCHOOL, GALLERY } from '@/consts/consts'

import LangContext from '../../../context/LangContext'

export default function Discover() {

  const { t } = useContext(LangContext)

  const router = useRouter()

  const load = () => {
    alert('Image loaded')
  }

  return (
    <div className="bg-white text-black min-h-[25vh] sm:min-h-[40vh] md:min-h-[45vh] xl:min-h-[95vh]">
      <marquee
        hspace="0"
        className="invisible xl:visible bg-[#E35F00] h-7 text-white align-middle"
      >
        ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරස්ථානයේ නිල වෙබ් අඩවිය වෙත සාදරයෙන්
        පිළිගනිමු!
      </marquee>
      <div className="relative bg-white w-full flex justify-end w-9/12">
        <img
          className="w-9/12"
          src="./static/templeImage.jpg"
          alt="discover image"
          loading="lazy"
          onLoadingComplete={load}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-25% to-transparent"></div>

        <div className="absolute inset-0 w-11/12 xl:w-8/12 pl-10 xl:pl-32 ">
          <h1 className="text-sm xl:text-3xl my-2 xl:my-10 font-bold text-black text-black">
            ශ්‍රී සුදර්ශනාරාම <br />
            පුරාණ විහාරය
          </h1>
          <p className=" hidden text-justify sm:flex text-xs xl:text-lg w-1/2">
            මාලඹේ පිට්ටුගල ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරස්ථානය ශ්‍රී ලාංකීය
            සංස්කෘතිය සහ ආගමික උරුමයේ අපූර්වත්වය විහදා පාමින් විරාජමාන වසර 300කට
            අධික ඉතිහාසයකට උරුමකම් කියන සිද්ධස්ථානයකි. මාලඹේ නගරයේ පිහිටා ඇති
            මෙම පුරාණ විහාරය ඉදිරි පරම්පරාවන් සඳහා අධ්‍යාත්මික ඥානාලෝකය ලබාදෙන
            සහ සංස්‌කෘතික වටිනාකම් සුරක්ෂිත කරන අගනා පින් බිමකි.
          </p>
          <div className=" w-6/12 sm:w-8/12 xl:w-1/2 flex flex-col sm:flex-row  sm:space-x-2 xl:space-x-6 mt-2 xl:mt-20 ">
            <button
              onClick={() => {
                router.push('/dhammaSchool')
              }}
              className="bg-[#740000] text-xs rounded-full py-1 sm:px-2 xl:px-6 xl:py-3  my-1 text-white"
            >
              {t('DHAMMA_SCHOOL')}
            </button>
            <button
              onClick={() => {
                router.push('/gallery')
              }}
              className="rounded-full text-xs font-semibold py-1 text-[#740000] my-1 border-[1px] xl:border-2 border-[#740000] sm:px-2 xl:px-6 md:py-3"
            >
              {t('GALLERY')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
