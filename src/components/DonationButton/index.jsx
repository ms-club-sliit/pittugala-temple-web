'use client'

import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

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
        bgcolor: 'orange',
        boxShadow: 24,
        p: 4,
    };

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
                        <Box sx={modalStyle}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Donations
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}
