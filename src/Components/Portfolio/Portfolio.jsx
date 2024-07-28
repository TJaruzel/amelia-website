import React, { useEffect, useState } from 'react';
import { Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
import WebJagchowMockup from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowCover.AmeliaRensch.png'
import WebFyaMockup from '../../Lib/WebCollectionMockups/FYAAppMockups/FYAAppCover.AmeliaRensch.png'
import IllustrationMountainMockup from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup1.AmeliaRensch.png'
import IllustrationRaftMockup from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup2.AmeliaRensch.png'
import IllustrationOmaMockup from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup3.AmeliaRensch.png'
import IllustationBeatlesMockup from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesKing.png'
import PhotographyIreland1 from '../../Lib/PhotographyCollection/Ireland/IMG_2265.CR2(1).jpg'
import PhotographyIreland2 from '../../Lib/PhotographyCollection/Ireland/IMG_2152.CR2(1).jpg'
import PhotographyPortrait1 from '../../Lib/PhotographyCollection/Portraits/DSC_5110.jpg'
import PhotographyPortrait2 from '../../Lib/PhotographyCollection/Portraits/DSC_7598-3.jpg'
import Collection from './Collection';
import Loader from '../Shared/Loader';

const useStyles = makeStyles((theme) => ({
  fullPageContainer: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
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

const Portfolio = ({ setSelectedImageData }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([...itemData])
  const isMdUp = useMediaQuery('(min-width:800px)');
  const isLgUp = useMediaQuery('(min-width:1280px)');
  const urlParams = new URLSearchParams(window.location.search);
  const jumpto = urlParams.get('jumpto');
  console.log(jumpto)
  const validCollectionNames = ["logo", "branding", "editorial", "illustration", "web", "photography"]
  let containerStyle = {};
  let portfolioTextStyle = {};
  if (isMdUp) { containerStyle = { marginTop: '16vh' } } else { containerStyle = { marginTop: '8vh' } }
  if (isLgUp) { portfolioTextStyle = { width: '40vw' } } else { portfolioTextStyle = { width: '70vw' } }

  const handleOpenModal = (collection) => {
    setSelectedCollection(collection?.name);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCollectionsLoad = (inputItem, index) => {
    const newLoadedImages = [...loadedImages]
    const foundItem = newLoadedImages[index].find(item => item === inputItem);
    foundItem.status = true;
    setLoadedImages(newLoadedImages);
  }

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const determineRouteAndText = (index) => {
    if (index === 0) {
      return { name: validCollectionNames[0], text: 'Logo' }
    }
    if (index === 1) {
      return { name: validCollectionNames[1], text: 'Branding' }
    }
    if (index === 2) {
      return { name: validCollectionNames[2], text: 'Editorial' }
    }
    if (index === 3) {
      return { name: validCollectionNames[3], text: 'Illustration' }
    }
    if (index === 4) {
      return { name: validCollectionNames[4], text: 'Web' }
    }
    if (index === 5) {
      return { name: validCollectionNames[5], text: 'Photography' }
    }
  }

  useEffect(() => {
    if (loadedImages.every(list => list.every(item => item.status))) {
      setLoading(false);
    }
    else {
      if (loading !== true) {
        setLoading(true);
      }
    }
  }, [loadedImages, loading])

  useEffect(() => {
    if (Boolean(jumpto)) {
      let collectionNameIndex = validCollectionNames.findIndex(x => x === jumpto.toLowerCase());
      console.log(collectionNameIndex)
      if (collectionNameIndex >= 0) {
        handleOpenModal(determineRouteAndText(collectionNameIndex))
      }
    }
  }, [jumpto, validCollectionNames])

  return (
    <Grid container className={classes.fullPageContainer} style={containerStyle}>
      <Loader open={loading} />
      <Grid container item style={{ justifyContent: 'center', margin: '20px' }}>
        <img
          src={PortfolioText}
          alt={"Portfolio"}
          loading="eager"
          style={portfolioTextStyle}
        />
      </Grid>
      <Grid container item>
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
                rowHeight={200}
              >
                {item.map((item, itemIndex) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 200, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                      onLoad={() => handleCollectionsLoad(item, index)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Grid>
        ))
        }
      </Grid>
      <Collection
        open={openModal}
        onClose={handleCloseModal}
        name={selectedCollection}
        setSelectedImageData={setSelectedImageData}
      />
    </Grid >
  );
};

export default Portfolio;

const itemData = [
  [
    {
      img: PersonalLogoMockup,
      title: 'Personal Logo',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: ApcMockup,
      title: 'APC Logo',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: FyaMockup,
      title: 'FYA Logo',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: PersonalLogoMockup2,
      title: 'Personal Logo',
      rows: 1,
      cols: 2,
      status: false,
    },
  ],
  [
    {
      img: ApcBrandingMockup,
      title: 'APC Branding Mockup',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: ApcBrandingMockup2,
      title: 'APC Branding Sticker Mockup',
      rows: 2,
      cols: 2,
      status: false,
    },
  ],
  [
    {
      img: AugustanMockup,
      title: 'Augustan Magazine Mockup',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: GreatGatsbyMockup,
      title: 'Great Gatsby Mockup',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: BeatlesMockup,
      title: 'Beatles Magazine Mockup',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: TravelistaMockup,
      title: 'Travelista Magazine Mockup',
      rows: 1,
      cols: 2,
      status: false,
    },
  ],
  [
    {
      img: IllustationBeatlesMockup,
      title: 'Personal Logo',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: IllustrationMountainMockup,
      title: 'APC Logo',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: IllustrationRaftMockup,
      title: 'FYA Logo',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: IllustrationOmaMockup,
      title: 'Personal Logo',
      rows: 1,
      cols: 2,
      status: false,
    },
  ],
  [
    {
      img: WebJagchowMockup,
      title: 'Jagchow App',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: WebFyaMockup,
      title: 'FYA App',
      rows: 2,
      cols: 2,
      status: false,
    },
  ],
  [
    {
      img: PhotographyPortrait1,
      title: 'Augustan Magazine Mockup',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: PhotographyPortrait2,
      title: 'Great Gatsby Mockup',
      rows: 1,
      cols: 1,
      status: false,
    },
    {
      img: PhotographyIreland1,
      title: 'Beatles Magazine Mockup',
      rows: 2,
      cols: 2,
      status: false,
    },
    {
      img: PhotographyIreland2,
      title: 'Travelista Magazine Mockup',
      rows: 1,
      cols: 2,
      status: false,
    },
  ],
];