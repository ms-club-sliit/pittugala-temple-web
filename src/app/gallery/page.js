'use client'
import Image from 'next/image'
import GalleryNavigation from '@/components/gallery/gallerynavigation'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import '../../../src/CSS/gallery.css'
import { ImageList, ImageListItem, Container } from '@mui/material'
import galleryData from '@/data/gallery.json'


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredGalleryData =
    selectedCategory === 'All'
      ? galleryData.galleryData
      : galleryData.galleryData.filter((item) => item.category === selectedCategory)

  const numberOfImages = filteredGalleryData.length;

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
