// components/gallery_sub_navigation/galleynavigation.js
"use client";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
    },
    '& .MuiOutlinedInput-input': {
        padding: '10px 14px',
        width: '300px',
    },
    '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 14px) scale(1)',
    },
    '& .custom-end-icon': {
        width: '24px', 
        height: '24px',
        cursor: 'pointer', 
      },
});

const GalleryNavigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white p-4 text-black font-semibold">
            <div className="container mx-auto flex justify-between items-center pl-20">
                <div className="hidden md:block">
                    <ul className="flex space-x-6 pr-20">
                        <li>
                            <a href="#">All</a>
                        </li>
                        <li className="pl-5">
                            <a href="#">Poya Day</a>
                        </li>
                        <li className="pl-5">
                            <a href="#">Katina Pooja</a>
                        </li>
                        <li className="pl-5">
                            <a href="#">Bodhi Pooja</a>
                        </li>
                        <li className="pl-5">
                            <a href="#">Charity</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="md:hidden flex items-center">
          <button
            className="animate-bounce text-black"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div> */}
                <CustomTextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                        endAdornment:  <SearchIcon style={{ color: 'grey' }} />,
                      }}
                />
            </div>
        </nav>
    );
};

export default GalleryNavigation;
