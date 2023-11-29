'use client'
import Image from 'next/image'
import GalleryNavigation from '@/components/gallery/gallerynavigation'
import React, { useEffect, useState } from 'react'
import '../../../src/CSS/gallery.css'
import galleryData from '@/data/gallery.json'


const Gallery = () => {

  const [selectedCategory, setSelectedCategory] = useState('All') //Used to filter the gallery data

  const handleCategoryChange = (category) => { //Used to change the category of the gallery
    setSelectedCategory(category)
  }

  const filteredGalleryData = 
    selectedCategory === 'All'
      ? galleryData.galleryData
      : galleryData.galleryData.filter((item) => item.category === selectedCategory)

  const numberOfImages = filteredGalleryData.length; //Used to determine the number of images in the gallery

  return (
    <div className="bg-white">
      <GalleryNavigation
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <hr></hr>
      {numberOfImages !== 1 && numberOfImages < 5 ? (
        <div className="grid grid-cols-3 gap-4 w-10/12 ml-[180px] mb-10 mt-10 ">

          {filteredGalleryData.map((item, index) => (
            <div
              key={item.id}
              className={`${index === 0 || index === 2 ? 'col-span-2' : 'col-span-1'
                }`}
            >
              <img
                src={`/static/gallery-images/${item.image}`}
                alt={item.category}
                className="w-full rounded-lg w-full h-full"
              />
            </div>

          ))}

        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-10/12 ml-[180px] mb-10 mt-10 ">

          {filteredGalleryData.map((item, index) => (
            <div
              key={item.id}
              className={`${index === 1 || index === 5 ? 'col-span-2' : 'col-span-1'
                }`}
            >
              <img
                src={`/static/gallery-images/${item.image}`}
                alt={item.category}
                className="w-full rounded-lg w-full h-full"
              />
            </div>

          ))}

        </div>
      )}
      <hr></hr>
    </div>
  )
}

export default Gallery
