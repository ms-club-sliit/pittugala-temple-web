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
            "height": "500",
        },
        {
            "id": 2,
            "category": "katina_pooja",
            "image": "/static/Gallery.png",
            "width": "403",
            "height": "800",
        },
        {
            "id": 3,
            "category": "bodhi_pooja",
            "image": "/static/Gallery.png",
            "width": "408",
            "height": "600",
        },
        {
            "id": 4,
            "category": "charity",
            "image": "/static/Gallery.png",
            "width": "417",
            "height": "500",
        },
        {
            "id": 5,
            "category": "poya_day",
            "image": "/static/Gallery.png",
            "width": "303",
            "height": "500",
        },
        {
            "id": 6,
            "category": "katina_pooja",
            "image": "/static/Gallery.png",
            "width": "308",
            "height": "500",
        },
        {
            "id": 7,
            "category": "bodhi_pooja",
            "image": "/static/Gallery.png",
            "width": "302",
            "height": "500",
        },
        {
            "id": 8,
            "category": "charity",
            "image": "/static/Gallery.png",
            "width": "418",
            "height": "235",
        },
        {
            "id": 9,
            "category": "poya_day",
            "image": "/static/Gallery.png",
            "width": "308",
            "height": "347",
        }
    ]
};


//Starter Code for Gallery Page
const Gallery = () => {
    const galleryItems = galleryData.gallery.slice(0, 9);
    const itemsPerRow = 3;

    const renderGalleryItem = (item, index) => (
        <Box
            key={item.id}
            p={1}
            width={`calc(100% / ${itemsPerRow})`}
            // height={`${item.height}px`}
            // style={{
            //     verticalAlign: index < itemsPerRow ? 'top' : 'initial',
            // }}
        >
            <Image src={item.image} alt={item.category} width={item.width} height={item.height}  layout="fixed" />
        </Box>
    );



    const renderRowSeparator = (index) => {
        return ((index + 1) % itemsPerRow === 0 || index === galleryItems.length - 1) ? (
            <div style={{ width: '100%', height: '100%' }} />
        ) : null;
    };
    // console.log("itemsPerRow", itemsPerRow)
    return (
        <div
        style={{
       
            backgroundColor: "white",

        }}
        >
            <Navbar />
            <GalleryNavigation />
            <hr></hr>
            <div style={{
                display: "flex",
                flexWrap: "wrap", 
                backgroundColor: "white",
                // justifyContent: "space-between",
                alignItems: "flex-start",
                marginLeft: "8vw",
                marginRight: "4vw",
                // maxWidth: `${itemsPerRow * 100}%`,
            }}>
                {galleryItems?.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {renderGalleryItem(item,index)}
                        {renderRowSeparator(index)}
                    </React.Fragment>
                ))}

            </div>
            <hr></hr>
            <Footer />
        </div>
    );
};

export default Gallery;
