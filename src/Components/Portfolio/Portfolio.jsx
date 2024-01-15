import React, { useState } from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import PortfolioText from '../../Lib/Backgrounds/PortfolioPage.png'
import PersonalLogoMockup from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup2.AmeliaRensch.png'
import PersonalLogoMockup2 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup1.AmeliaRensch.png'
import FyaMockup from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup2.AmeliaRensch.png'
import ApcMockup from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup1.AmeliaRensch.png'
import BeatlesMockup from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMockup2.AmeliaRensch.png'
import GreatGatsbyMockup from '../../Lib/EditorialCollectionMockups/TheGreatGatsbyBookCoverRedesign/TheGreatGatsbyBookCoverMockup.AmeliaRensch.jpg'
import TravelistaMockup from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineCoverMockup.AmeliaRensch.jpg'
import AugustanMockup from '../../Lib/EditorialCollectionMockups/TheAugustan/TheAugustanCoverMockup1.AmeliaRensch.jpg'
import ApcBrandingMockup from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup1.AmeliaRensch.png'
import ApcBrandingMockup2 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup16.AmeliaRensch.png'
import Collection from './Collection';

const useStyles = makeStyles((theme) => ({
  fullPageContainer: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
    marginTop: '15vh',
    alignContent: 'top',
    justifyContent: 'center',
  },
  imageListContainer: {
    position: 'relative',
    '&:hover .overlay': {
      opacity: 0, // Set opacity to 0 on hover
    },
    margin: '15px',
    border: '2px solid black'
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
    transition: 'opacity 0.3s ease', // Smooth transition on opacity change
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleOpenModal = (collection) => {
    setSelectedCollection(collection?.name);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const determineRouteAndText = (index) => {
    if (index === 0) {
      return { name: "logo", text: 'Logo' }
    }
    if (index === 1) {
      return { route: "branding", text: 'Branding' }
    }
    if (index === 2) {
      return { route: "editorial", text: 'Editorial' }
    }
    if (index === 3) {
      return { route: "web", text: 'Web' }
    }
    if (index === 4) {
      return { route: "illustration", text: 'Illustration' }
    }
    if (index === 5) {
      return { route: "photography", text: 'Photography' }
    }
  }

  return (
    <Grid container className={classes.fullPageContainer}>
      <Grid container item style={{ justifyContent: 'center', margin: '20px' }}>
        <img
          src={PortfolioText}
          alt={"Portfolio"}
          loading="lazy"
          style={{
            width: '70vw'
          }}
        />
      </Grid>
      {itemData.map((item, index) => (
        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* ImageList Container */}
          <div className={classes.imageListContainer} onClick={() => handleOpenModal(determineRouteAndText(index))}>
            {/* Overlay */}
            <div className={`overlay ${classes.overlay}`}><Typography variant={'h2'} style={{ color: 'white' }}>{determineRouteAndText(index)?.text}</Typography></div>

            {/* ImageList */}
            <ImageList
              variant="quilted"
              cols={4}
              style={{ position: 'relative', height: '30vh', overflow: 'hidden', alignContent: 'center' }}
            >
              {item.map((item, index) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                >
                  <img
                    {...srcset(item.img, 200, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
      ))
      }
      <Collection
        open={openModal}
        onClose={handleCloseModal}
        name={selectedCollection}
      />
    </Grid >
  );
};

export default Portfolio;

const itemData = [
  [
    {
      img: PersonalLogoMockup,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: ApcMockup,
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: FyaMockup,
      title: 'Camera',
      rows: 1,
      cols: 1,
    },
    {
      img: PersonalLogoMockup2,
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
  ],
  [
    {
      img: ApcBrandingMockup,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: ApcBrandingMockup2,
      title: 'Burger',
      rows: 2,
      cols: 2,
    },
  ],
  [
    {
      img: AugustanMockup,
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
    {
      img: GreatGatsbyMockup,
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: BeatlesMockup,
      title: 'Camera',
      rows: 2,
      cols: 2,
    },
    {
      img: TravelistaMockup,
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
  ],
  [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
  ],
  [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
  ],
  [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
  ],
];