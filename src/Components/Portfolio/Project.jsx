import React from 'react';
import { makeStyles } from '@mui/styles';
import WovenImageList from './WovenImageList';

const useStyles = makeStyles((theme) => ({
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const ProjectModal = ({ open, onClose, project, setSelectedImageData }) => {
    const classes = useStyles();

    const openLightbox = (item) => {
        const index = project.images.findIndex((obj) => obj.id === item.id);

        const itemsBefore = project.images.slice(0, index);
        const foundItem = project.images.slice(index, index + 1);
        const itemsAfter = project.images.slice(index + 1);

        // Concatenate the parts in the desired order
        const newArray = foundItem.concat(itemsAfter, itemsBefore);

        setSelectedImageData({ images: newArray });
    };

    return (
        <div>
            {/* Quilted Image List */}
            <WovenImageList itemData={project.images} openLightbox={openLightbox} />
        </div>
    );
};

export default ProjectModal;