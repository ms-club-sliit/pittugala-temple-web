'use client'
import React, { useContext } from 'react'
import Fab from '@mui/material/Fab'
import LanguageIcon from '@mui/icons-material/Language';

import LangContext from '../../context/LangContext'

export default function LangButton() {
    const { t, changeLanguage } = useContext(LangContext)

    const btnStyles = {
        position: 'fixed',
        bottom: 16,
        left: 16,
        backgroundColor: 'orange',
        animation: 'bounce 1s infinite',
    }

    const handleLanguageChange = () => {
        if(t('LANGUAGE') === 'en') {
            changeLanguage('si')
        } else {
            changeLanguage('en')
        }
    }

    return (
        <div>
            <Fab
                style={btnStyles}
                color="primary"
                aria-label="add"
                onClick={handleLanguageChange}
            >
                <LanguageIcon/>
            </Fab>

        </div>
    )
}
