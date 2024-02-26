'use client'
import galleryData from '@/data/gallery.json'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function GalleryView({ params }) {
  const filtData = galleryData.galleryData
  const image = filtData.find((item) => item.id === parseInt(params.imageID))
  const router = useRouter()

  function onNextClick() {
    if (parseInt(params.imageID) == filtData.length) {
      router.push(`1`)
    } else {
      router.push(`${parseInt(params.imageID) + 1}`)
    }
  }

  function onPreviousClick() {
    if (parseInt(params.imageID) == 1) {
      router.push(`${filtData.length}`)
    } else {
      router.push(`${parseInt(params.imageID) - 1}`)
    }
  }

  return (
    <div className="flex flex-col w-full  text-black">
      <div className="flex h-40 w-full items-center justify-center">
        <button className="mx-10" onClick={() => onPreviousClick()}>
          <Image src={'/static/leftArrow.svg'} width={100} height={100} />
        </button>
        <button className="mx-10" onClick={() => onNextClick()}>
          <Image src={'/static/rightArrow.svg'} width={100} height={100} />
        </button>
      </div>
      <div className=" flex flex-col text-black items-center  min-h-screen">
        {image && (
          <Image
            className="block mx-auto w-8/12"
            src={`/static/gallery-images/${image.image}`}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </div>
  )
}

export default GalleryView
