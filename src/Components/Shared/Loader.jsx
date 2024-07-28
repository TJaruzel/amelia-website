import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect } from 'react';

const Loader = ({ open }) => {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [open]);

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(0,0,0,0.9)' }}
            open={open}
        >
            <CircularProgress style={{ color: "#82C1CA" }} />
        </Backdrop>
    );
};

export default Loader;