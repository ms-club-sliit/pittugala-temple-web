import Footer from '@/components/footer'
import Image from 'next/image'
import Navbar from "@/components/Navbar";
import GalleryNavigation from '@/components/gallery/gallerynavigation';
import Box from '@mui/material/Box';
import React from 'react';
import "../../../src/CSS/gallery.css";
import { ImageList, ImageListItem,Container } from '@mui/material';



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
            "height": "320",
        },
        {
            "id": 6,
            "category": "katina_pooja",
            "image": "/static/Gallery.png",
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
           
<Container maxWidth="100vw" sx={{width: "90vw", marginRight: "2%",marginTop:"2%"}} >
<ImageList sx={{ width: 'auto', height: 'auto' }} variant="woven" cols={3} gap={8}>
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
</ImageList>
</Container>

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
