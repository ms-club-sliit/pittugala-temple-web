'use client'
import galleryData from '@/data/gallery.json'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Gallery = () => {
  const filteredGalleryData = galleryData.galleryData
  const router = useRouter()

  function openImage(id) {
    router.push(`gallery/${id}`)
  }

  return (
    <>
      <div className="bg-white flex justify-center">
        <div className=" grid grid-cols-2 gap-1 sm:grid-cols-3  sm:gap-4 w-full mx-2 sm:w-9/12 ">
          {filteredGalleryData.map((item, index) => (
            <div
              key={item.id}
              className={` ${
                index === 1 || index === 5 || index === 11
                  ? 'col-span-2'
                  : 'col-span-1'
              }`}
            >
              <Image
                width={item.width}
                onClick={() => openImage(item.id)}
                height={item.height}
                src={`/static/gallery-images/${item.image}`}
                alt={item.category}
                className="w-full cursor-pointer rounded-lg h-60  object-cover transition-opacity opacity-0 duration-[1.5s]"
                onLoadingComplete={(image) =>
                  image.classList.remove('opacity-0')
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
