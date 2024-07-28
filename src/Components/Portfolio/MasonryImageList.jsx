import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, useMediaQuery } from '@mui/material';
import Loader from '../Shared/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MasonryImageList({ itemData, openLightbox }) {
  const isMdUp = useMediaQuery('(min-width:800px)');
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([...itemData])

  const handleCollectionsLoad = (inputItem) => {
    const newLoadedImages = [...loadedImages]
    const image = newLoadedImages.find(item => item === inputItem);
    image.status = true;
    setLoadedImages(newLoadedImages);
  }

  const getColumns = () => {
    if (isMdUp) {
      return 3;
    }
    else {
      return 1;
    }
  }

  useEffect(() => {
    if (loadedImages.every(item => item.status)) {
      setTimeout(() => {
        setLoading(false);
      }, 350)
    }
    else {
      if (loading !== true) {
        setLoading(true);
      }
    }
  }, [loadedImages, loading])

  return (
    <Grid container>
      <Loader open={loading} />
      <ImageList variant="masonry" cols={getColumns()} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.src}>
            <img
              srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={() => openLightbox(item)}
              onLoad={() => handleCollectionsLoad(item)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}