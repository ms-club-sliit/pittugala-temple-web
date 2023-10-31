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
      "height": "300",
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
      "width": "480",
      "height": "600",
    },
    {
      "id": 4,
      "category": "charity",
      "image": "/static/Temple1.png",
      "width": "440",
      "height": "400",
    },
    {
      "id": 5,
      "category": "poya_day",
      "image": "/static/Gallery.png",
      "width": "440",
      "height": "320",
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
      "width": "450",
      "height": "300",
    },
    {
      "id": 8,
      "category": "charity",
      "image": "/static/Temple1.png",
      "width": "450",
      "height": "400",
    },
    {
      "id": 9,
      "category": "poya_day",
      "image": "/static/Gallery.png",
      "width": "450",
      "height": "600",
    }
  ]
};


const Gallery = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    console.log("gallerDate",category);
    setSelectedCategory(category);
  };

  const filteredGalleryData = selectedCategory === 'All' ? galleryData.gallery : galleryData.gallery.filter(item => item.category === selectedCategory);
  console.log("Filtered Gallery Data:", filteredGalleryData); 

  console.log("Props being passed to GalleryNavigation - handleCategoryChange:", handleCategoryChange);
  console.log("Props being passed to GalleryNavigation - selectedCategory:", selectedCategory);


  return (
    <div
      style={{

        backgroundColor: "white",

      }}
    >
      <Navbar />
      <GalleryNavigation handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      <hr></hr>

      <Container maxWidth="100vw" sx={{ width: "90vw", marginRight: "2%", marginTop: "2%", marginBottom: "2%" }} >

        <ImageList sx={{ width: 'auto', height: 'auto' }} variant="woven" cols={3} gap={8}>
          {filteredGalleryData.map((item) => ( // Use filteredGalleryData instead of galleryData.gallery
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.image}?w=${item.width}&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=${item.width}&fit=crop&auto=format`}
                alt={`Image ${item.id}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      {/* <ImageList sx={{ width: 'auto', height: 'auto' }} variant="woven" cols={3} gap={8}>
          {galleryData?.gallery.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}

      {/* <div className="gallery-container"  style={{
            marginLeft: "8%",
            marginTop: "2%",
          }}>
        {galleryData.gallery.map((item, index) => (
          <div key={item.id} className="gallery-item" style={{ flex: `0 0 calc(33.33% - 10px)`, margin: "5px" }}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              style={{ width: "auto", height: `${item.height}px`, marginTop: "2%" }}
            />
          </div>
        ))}
      </div> */}
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Gallery;
