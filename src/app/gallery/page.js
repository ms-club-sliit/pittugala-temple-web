import Footer from '@/components/footer'
import Image from 'next/image'
import Navbar from "@/components/Navbar";
import GalleryNavigation from '@/components/gallery/gallerynavigation';
import Box from '@mui/material/Box';
import React from 'react';
import "../../../src/CSS/gallery.css";


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
            "image": "/static/Gallery.png",
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
            "image": "/static/Gallery.png",
            "width": "440",
            "height": "400",
        },
        {
            "id": 5,
            "category": "poya_day",
            "image": "/static/Gallery.png",
            "width": "440",
            "height": "300",
        },
        {
            "id": 6,
            "category": "katina_pooja",
            "image": "/static/Gallery.png",
            "width": "500",
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
            "image": "/static/Gallery.png",
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

    return (
        <div
        style={{
       
            backgroundColor: "white",

        }}
        >
            <Navbar />
            <GalleryNavigation />
            <hr></hr>
            <div className="gallery-container"  style={{
            marginLeft: "8%",
            marginTop: "2%",
          }}>
        {galleryData.gallery.map((item, index) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              style={{ width: `${item.width}px`, height: `${item.height}px`, marginTop: "2%" }}
            />
          </div>
        ))}
      </div>
            <hr></hr>
            <Footer />
        </div>
    );
};

export default Gallery;
