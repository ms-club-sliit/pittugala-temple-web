'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Fab from '@mui/material/Fab';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import { DONATION_HEADER } from '@/consts/consts'

export default function DonationButton() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const btnStyles = {
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: 'orange',
        animation: 'bounce 1s infinite',
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
    };

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FF7518',
        fontWeight: 'bold',
    }

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        gap: '1rem',
        mt: 2,
    }

    return (
        <>
            <Fab
                style={btnStyles}
                color="primary"
                aria-label="add"
                onClick={handleOpen}
            >
                <VolunteerActivismIcon />
            </Fab>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={{ ...modalStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography id="transition-modal-title" variant="h5" component="h2" style={headerStyle}>
                                {DONATION_HEADER}
                            </Typography>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Image
                                    src="/static/boc.png"
                                    alt="pittugala-temple-web-logo"
                                    width={150}
                                    height={100}
                                    loading='lazy'
                                />
                            </div>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }} style={bodyStyle}>
                                විහාරාධිපති<br />
                                ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරය - මාලබේ<br />
                                ලංකා බැංකුව මාලබේ ශාඛව - 8576912<br />
                                0715608209
                            </Typography>
                        </Box>

                    </Fade>
                </Modal>
            </div>
        </>
    )
}
