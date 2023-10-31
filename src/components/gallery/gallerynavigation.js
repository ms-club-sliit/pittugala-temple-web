"use client";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

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

const GalleryNavigation = styled.div`
  .selected {
    background-color: maroon;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
  }
  .unselected {
    padding: 8px 12px;
  }

  .selected a {
    color: white;
    text-decoration: none;
  }
`;

const NavigationItem = styled.li`
  cursor: pointer;
`;

const GalleryNavItem = ({ selectedItem, handleItemClick, itemName, children }) => (
  <NavigationItem className={selectedItem === itemName ? 'selected' : 'unselected'} onClick={() => handleItemClick(itemName)}>
  <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(itemName); }}>{children}</a>
  </NavigationItem>
);

const GalleryNavigationComponent = ({ handleCategoryChange, selectedCategory }) => {

  const handleItemClick = (itemName) => {
    handleCategoryChange(itemName);
  };

  return (
    <GalleryNavigation className="bg-white p-4 text-black font-semibold">
      <div className="container mx-auto flex justify-between items-center pl-20">
        <div className="hidden md:block">
          <ul className="flex space-x-6 pr-20">
            <GalleryNavItem selectedItem={selectedCategory} handleItemClick={handleItemClick} itemName="All">
              All
            </GalleryNavItem>
            <GalleryNavItem selectedItem={selectedCategory} handleItemClick={handleItemClick} itemName="poya_day">
              Poya Day
            </GalleryNavItem>
            <GalleryNavItem selectedItem={selectedCategory} handleItemClick={handleItemClick} itemName="katina_pooja">
              Katina Pooja
            </GalleryNavItem>
            <GalleryNavItem selectedItem={selectedCategory} handleItemClick={handleItemClick} itemName="bodhi_pooja">
              Bodhi Pooja
            </GalleryNavItem>
            <GalleryNavItem selectedItem={selectedCategory} handleItemClick={handleItemClick} itemName="charity">
              Charity
            </GalleryNavItem>
          </ul>
        </div>
        <CustomTextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon style={{ color: 'grey' }} />,
          }}
        />
      </div>
    </GalleryNavigation>
  );
};

export default GalleryNavigationComponent;
