"use client";
import Footer from '@/components/footer'
import Image from 'next/image'
import Navbar from "@/components/Navbar";
import GalleryNavigation from '@/components/gallery/gallerynavigation';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import "../../../src/CSS/gallery.css";
import { ImageList, ImageListItem, Container } from '@mui/material';



//Dummy Date for Gallery Page
const galleryData = {
  "gallery": [
    {
      "id": 1,
      "category": "poya_day",
      "image": "/static/Gallery.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 2,
      "category": "katina_pooja",
      "image": "/static/Temple1.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 3,
      "category": "bodhi_pooja",
      "image": "/static/Gallery.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 4,
      "category": "charity",
      "image": "/static/Temple1.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 5,
      "category": "poya_day",
      "image": "/static/Gallery.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 6,
      "category": "katina_pooja",
      "image": "/static/Temple1.png",
      "width": "600",
      "height": "400",
    },
    {
      "id": 7,
      "category": "bodhi_pooja",
      "image": "/static/Gallery.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 8,
      "category": "charity",
      "image": "/static/Temple1.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 9,
      "category": "poya_day",
      "image": "/static/Gallery.png",
      "width": "617",
      "height": "400",
    },
    {
      "id": 10,
      "category": "poya_day",
      "image": "/static/Temple1.png",
      "width": "617",
      "height": "400",
    },
  ]
};


const Gallery = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredGalleryData = selectedCategory === 'All' ? galleryData.gallery : galleryData.gallery.filter(item => item.category === selectedCategory);


  return (
    <div className="bg-white">
      <Navbar />
      <GalleryNavigation handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      <hr></hr>
      <div className="grid grid-cols-3 gap-4 w-10/12 ml-[180px] mb-10 mt-10 ">
        {filteredGalleryData.map((item, index) => (
          <div
            key={item.id}
            className={`${index === 1 || index === 5 ? 'col-span-2' : 'col-span-1'
              }`}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full rounded-lg w-full h-full"
            />
          </div>
        ),
        )}
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Gallery;
