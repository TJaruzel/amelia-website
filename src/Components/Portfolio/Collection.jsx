import React, { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, useMediaQuery, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import PersonalLogo from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup3.AmeliaRensch.png';
import AugustaPartnershipLogo from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup3.AmeliaRensch.png';
import BowlNoodlesLogo from '../../Lib/LogoCollectionMockups/BowlONoodlesLogoMockups/BowlONoodlesLogoMockup3.AmeliaRensch.png';
import FyaLogo from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup2.AmeliaRensch.png';
import ProjectModal from './Project';
import { ArrowBack, ArrowCircleRight, Close } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    imageListContainer: {
        position: 'relative',
        margin: '15px',
        overflow: 'hidden', // Ensure the overlay stays within the container
        borderRadius: '8px', // Optional: Add border-radius for a rounded look
    },
    overlay: {
        zIndex: 800,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // 50% opacity black overlay
        opacity: 1, // Initial opacity
        transition: 'opacity 0.3s ease, background 0.3s ease', // Smooth transition on opacity change
        '&:hover': {
            opacity: 0, // Set opacity to 0 on hover
        },
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensure the image covers the container
        transition: 'transform 0.3s ease', // Add a smooth transition on hover
    },
    modalContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(10px)', // Apply a blur effect to the area behind the modal
    },
}));

const Collection = ({ open, onClose, name }) => {
    const classes = useStyles();
    const data = collections[name];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={'xl'}
        >
            <DialogTitle>
                {selectedProject ? (
                    // Back button when a project is selected
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseModal}
                        aria-label="back"
                    >
                        <ArrowBack />
                    </IconButton>
                ) : (
                    // Close button in the top right when in collection view
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                )}
            </DialogTitle>
            <DialogContent className={classes.modalContent}>
                {selectedProject ? (
                    // Render individual project modal
                    <ProjectModal
                        onClose={handleCloseModal}
                        project={selectedProject}
                    />
                ) : (
                    // Render collection items
                    <Grid container>
                        {data?.map((item, index) => (
                            <Grid item key={index} xs={12} md={12} lg={6} xl={6}>
                                <div className={classes.imageListContainer}>
                                    <div
                                        className={`overlay ${classes.overlay}`}
                                        onClick={() => handleOpenModal(item)}
                                    >
                                        <Typography variant={'h2'} style={{ color: 'white' }}>
                                            {item.title}
                                        </Typography>
                                        <ArrowCircleRight style={{ color: 'white', position: 'absolute', bottom: '10px', right: '10px' }} />
                                    </div>
                                    <img
                                        className={classes.image}
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Collection;


const collections = {
    logo: [
        { image: PersonalLogo, title: 'Personal', project: 'logopersonal' },
        { image: AugustaPartnershipLogo, title: 'APC' },
        { image: BowlNoodlesLogo, title: 'Bowl O` Noodles' },
        { image: FyaLogo, title: 'FYA' }
    ],
    web: [
        { image: 'test', title: 'Jagchow App' },
        { image: 'test', title: 'Find Your Art App' }
    ],
    branding: [
        { image: 'test', title: 'Bowl O` Noodles Branding' },
        { image: 'test', title: 'Augusta Partnership for Children Inc. Branding' }
    ],
    photography: [
        { image: 'test', title: 'Street Art' },
        { image: 'test', title: 'Abandoned Prison' },
        { image: 'test', title: 'Portraits' },
        { image: 'test', title: 'Around Augusta' },
        { image: 'test', title: 'Chimney Rock' },
        { image: 'test', title: 'Ireland' }
    ],
    editorial: [
        { image: 'test', title: 'The Great Gatsby Book Redesign' },
        { image: 'test', title: 'The Augustan' },
        { image: 'test', title: 'Beatles Magazine Spread' },
        { image: 'test', title: 'Travelista Magazine' }
    ],
    illustration: [
        { image: 'test', title: 'Oma' },
        { image: 'test', title: 'Nokomis Raft' },
        { image: 'test', title: 'Nokomis Mountain' },
        { image: 'test', title: 'The Beatles Face Cards' }
    ]
}