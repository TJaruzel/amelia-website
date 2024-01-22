import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';

export default function WovenImageList({ itemData, openLightbox }) {
  const isMdUp = useMediaQuery('(min-width:800px)');
  const getColumns = () => {
    if (isMdUp) {
      return 3;
    }
    else {
      return 1;
    }
  }

  return (
    <ImageList variant="woven" cols={getColumns()} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.src}>
          <img
            srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            onClick={() => openLightbox(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}