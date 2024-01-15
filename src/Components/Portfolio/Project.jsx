import React from 'react';
import { Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const ProjectModal = ({ open, onClose, project }) => {
    const classes = useStyles();

    return (

        <img src={project?.image} alt={project?.title} style={{ maxWidth: '100%' }} />


    );
};

export default ProjectModal;