'use client'
import React from 'react'
import galleryData from '@/data/gallery.json'
import Image from 'next/image'

const Gallery = () => {
  const filteredGalleryData = galleryData.galleryData

  return (
    <div className="bg-white ">
      <div className="grid grid-cols-3 gap-4 w-9/12 ml-[14%]">
        {filteredGalleryData.map((item, index) => (
          <div
            key={item.id}
            className={`${index === 1 || index === 5 || index === 11
                ? 'col-span-2'
                : 'col-span-1'
              }`}
          >
            <Image
              width={item.width}
              height={item.height}
              src={`/static/gallery-images/${item.image}`}
              alt={item.category}
              className="w-full rounded-lg h-60  object-cover transition-opacity opacity-0 duration-[1.5s]"
              onLoadingComplete={(image) => image.classList.remove('opacity-0')}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
