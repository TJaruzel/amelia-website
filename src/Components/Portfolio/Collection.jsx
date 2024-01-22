import React, { useState } from 'react';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, useMediaQuery, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectModal from './Project';
import { ArrowBack, ArrowCircleRight, Close } from '@mui/icons-material';

//Thumbnail Images
import LogoPersonalThumbnail from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup3.AmeliaRensch.png';
import LogoApcThumbnail from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup3.AmeliaRensch.png';
import LogoBowlNoodlesThumbnail from '../../Lib/LogoCollectionMockups/BowlONoodlesLogoMockups/BowlONoodlesLogoMockup3.AmeliaRensch.png';
import LogoFyaThumbnail from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup2.AmeliaRensch.png';

import WebJagchowThumbnail from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowCover.AmeliaRensch.png';
import WebFyaThumbnail from '../../Lib/WebCollectionMockups/FYAAppMockups/FYAAppCover.AmeliaRensch.png';

import BrandingBowlNoodlesThumbnail from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBusinessCardMockup1.AmeliaRensch.jpg';
import BrandingApcThumbnail from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup1.AmeliaRensch.png';

import IllustrationMountainThumbnail from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup1.AmeliaRensch.png';
import IllustrationRaftThumbnail from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup4.AmeliaRensch.png';
import IllustrationOmaThumbnail from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup3.AmeliaRensch.png';
import IllustrationBeatlesThumbnail from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesQueen.png';

import EditorialAugustanThumbnail from '../../Lib/EditorialCollectionMockups/TheAugustan/TheAugustanCoverMockup1.AmeliaRensch.jpg';
import EditorialGatsbyThumbnail from '../../Lib/EditorialCollectionMockups/TheGreatGatsbyBookCoverRedesign/TheGreatGatsbyBookCoverMockup.AmeliaRensch.jpg';
import EditorialBeatlesThumbnail from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMagMockup.AmeliaRensch.png';
import EditorialTravelistaThumbnail from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineCoverMockup.AmeliaRensch.jpg';

import PhotographyStreetThumbnail from '../../Lib/PhotographyCollection/StreetArt/1.jpg';
import PhotographyPrisonThumbnail from '../../Lib/PhotographyCollection/AbandonedPrison/Letters.jpg';
import PhotographyPortraitThumbnail from '../../Lib/PhotographyCollection/Portraits/DSC_5110.jpg';
import PhotographyAugustaThumbnail from '../../Lib/PhotographyCollection/AroundAugusta/DSC_5901-3.jpg';
import PhotographyChimneyThumbnail from '../../Lib/PhotographyCollection/ChimneyRock/DSC_7044.jpg';
import PhotographyIrelandThumbnail from '../../Lib/PhotographyCollection/Ireland/IMG_1788.CR2(1).jpg';

//PersonalLogoImages
import LogoImagesDigitalSketch1 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Digital/DigitalSketch1.png';
import LogoImagesDigitalSketch2 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Digital/DigitalSketch2.png';
import LogoImagesDigitalSketch3 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Digital/DigitalSketch3.jpg';
import LogoImagesHandSketch1 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Hand/HandSketch1.jpg';
import LogoImagesHandSketch2 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Hand/HandSketch2.jpg';
import LogoImagesHandSketch3 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/Hand/HandSketch3.jpg';
import LogoImagesPersonalMockup1 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup1.AmeliaRensch.png';
import LogoImagesPersonalMockup2 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup2.AmeliaRensch.png';
import LogoImagesPersonalMockup3 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup3.AmeliaRensch.png';
import LogoImagesPersonalMockup4 from '../../Lib/LogoCollectionMockups/PersonalLogoMockups/PersonalLogoMockup4.AmeliaRensch.png';

//APCLogoImages
import ApcImagesDigitalSketch1 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch1.jpg';
import ApcImagesDigitalSketch2 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch2.jpg';
import ApcImagesDigitalSketch3 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch3.jpg';
import ApcImagesDigitalSketch4 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch4.jpg';
import ApcImagesDigitalSketch5 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch5.jpg';
import ApcImagesDigitalSketch6 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Digital/DigitalSketch6.jpg';
import ApcImagesHandSketch1 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Hand/LogoSketches1-AmeliaRensch.jpg';
import ApcImagesHandSketch2 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Hand/LogoSketches2-AmeliaRensch.jpg';
import ApcImagesHandSketch3 from '../../Lib/LogoCollectionMockups/APCLogoMockups/Hand/LogoSketches3-AmeliaRensch.jpg';
import ApcImagesLogoMockup1 from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup1.AmeliaRensch.png';
import ApcImagesLogoMockup2 from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup2.AmeliaRensch.png';
import ApcImagesLogoMockup3 from '../../Lib/LogoCollectionMockups/APCLogoMockups/APCLogoMockup3.AmeliaRensch.png';
import ApcImagesLogoMockup4 from '../../Lib/LogoCollectionMockups/APCLogoMockups/ConceptBoardSketch.jpg';

//BowlNoodesLogoImages
import BowlNoodesLogoMockup1 from '../../Lib/LogoCollectionMockups/BowlONoodlesLogoMockups/BowlONoodlesLogoMockup1.AmeliaRensch.png';
import BowlNoodesLogoMockup2 from '../../Lib/LogoCollectionMockups/BowlONoodlesLogoMockups/BowlONoodlesLogoMockup2.AmeliaRensch.png';
import BowlNoodesLogoMockup3 from '../../Lib/LogoCollectionMockups/BowlONoodlesLogoMockups/BowlONoodlesLogoMockup3.AmeliaRensch.png';

//FyaLogoImages
import FyaLogoMockup1 from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup1.AmeliaRensch.png';
import FyaLogoMockup2 from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup2.AmeliaRensch.png';
import FyaLogoMockup3 from '../../Lib/LogoCollectionMockups/FYALogoMockups/FYALogoMockup3.AmeliaRensch.png';

//BowlNoodlesBrandingImages
import BowlNoodlesBrandingMockup1 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBrandingStationeryMockup1.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup2 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBusinessCardMockup1.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup3 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBusinessCardMockup2.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup4 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBusinessCardMockup3.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup5 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesBusinessCardMockup4.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup6 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesCoverLetterMockup.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup7 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesEnvelopeMockup.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup8 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesLogoMockup1.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup9 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesPackagingMockup.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup10 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesPackagingMockup2.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup11 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesStationeryMockup2.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup12 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesStickerMockup1.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup13 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesStickerMockup2.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup14 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesTakeoutCupMockup.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup15 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesTshirtMockup1.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup16 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesTshirtMockup2.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup17 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesTshirtMockup3.AmeliaRensch.jpg';
import BowlNoodlesBrandingMockup18 from '../../Lib/BrandingCollectionMockups/BowlONoodlesMockups/BowlONoodlesTshirtMockup4.AmeliaRensch.jpg';

//ApcBrandingImages
import ApcBrandingMockup1 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup1.AmeliaRensch.png';
import ApcBrandingMockup2 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup2.AmeliaRensch.png';
import ApcBrandingMockup3 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup3.AmeliaRensch.png';
import ApcBrandingMockup4 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup4.AmeliaRensch.png';
import ApcBrandingMockup5 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup5.AmeliaRensch.png';
import ApcBrandingMockup6 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup6.AmeliaRensch.png';
import ApcBrandingMockup7 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup7.AmeliaRensch.png';
import ApcBrandingMockup8 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup8.AmeliaRensch.png';
import ApcBrandingMockup9 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup9.AmeliaRensch.png';
import ApcBrandingMockup10 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup10.AmeliaRensch.png';
import ApcBrandingMockup11 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup11.AmeliaRensch.png';
import ApcBrandingMockup12 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup12.AmeliaRensch.png';
import ApcBrandingMockup13 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup13.AmeliaRensch.png';
import ApcBrandingMockup14 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup14.AmeliaRensch.png';
import ApcBrandingMockup15 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup15.AmeliaRensch.png';
import ApcBrandingMockup16 from '../../Lib/BrandingCollectionMockups/APCMockups/APCMockup16.AmeliaRensch.png';

//BeatlesEditorialImages
import BeatlesEditorialHandSketch1 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/1.jpg';
import BeatlesEditorialHandSketch2 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/2.jpg';
import BeatlesEditorialHandSketch3 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/3.jpg';
import BeatlesEditorialHandSketch4 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/4.jpg';
import BeatlesEditorialHandSketch5 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/5.jpg';
import BeatlesEditorialHandSketch6 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Hand/6.jpg';
import BeatlesEditorialDigitalSketch1 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch1.jpg';
import BeatlesEditorialDigitalSketch2 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch2.jpg';
import BeatlesEditorialDigitalSketch3 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch3.jpg';
import BeatlesEditorialDigitalSketch4 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch4.jpg';
import BeatlesEditorialDigitalSketch5 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch5.jpg';
import BeatlesEditorialDigitalSketch6 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch6.jpg';
import BeatlesEditorialDigitalSketch7 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/Digital/DigitalSketch7.jpg';
import BeatlesEditorialMockup1 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMockup1.AmeliaRensch.png';
import BeatlesEditorialMockup2 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMockup2.AmeliaRensch.png';
import BeatlesEditorialMockup3 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMockup3.AmeliaRensch.png';
import BeatlesEditorialMockup4 from '../../Lib/EditorialCollectionMockups/TheBeatlesMagazineSpread/BeatlesMagMockup.AmeliaRensch.png';

//TravelistaEditorialImages
import TravelistaEditorialMockup1 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineCoverMockup.AmeliaRensch.jpg';
import TravelistaEditorialMockup2 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineCoverMockup2.AmeliaRensch.jpg';
import TravelistaEditorialMockup3 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineSpreadMockup1.AmeliaRensch.jpg';
import TravelistaEditorialMockup4 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineSpreadMockup2.AmeliaRensch.jpg';
import TravelistaEditorialMockup5 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineSpreadMockup3.AmeliaRensch.jpg';
import TravelistaEditorialMockup6 from '../../Lib/EditorialCollectionMockups/TravelistaMagazine/TravelistaMagazineAdvertisementsMockup.AmeliaRensch.jpg';

//OmaIllustrationImages
import OmaIllustrationMockup1 from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup1.AmeliaRensch.png';
import OmaIllustrationMockup2 from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup2.AmeliaRensch.png';
import OmaIllustrationMockup3 from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup3.AmeliaRensch.png';
import OmaIllustrationMockup4 from '../../Lib/IllustrationCollectionMockups/OmaMockups/OmaMockup4.AmeliaRensch.png';

//NokomisRaftIllustrationImages
import NokomisRaftIllustrationMockup1 from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup1.AmeliaRensch.png';
import NokomisRaftIllustrationMockup2 from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup2.AmeliaRensch.png';
import NokomisRaftIllustrationMockup3 from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup3.AmeliaRensch.png';
import NokomisRaftIllustrationMockup4 from '../../Lib/IllustrationCollectionMockups/NokomisRaft/NokomisRaftMockup4.AmeliaRensch.png';

//NokomisMountainIllustrationImages
import NokomisMountainIllustrationMockup1 from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup1.AmeliaRensch.png';
import NokomisMountainIllustrationMockup2 from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup2.AmeliaRensch.png';
import NokomisMountainIllustrationMockup3 from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup3.AmeliaRensch.png';
import NokomisMountainIllustrationMockup4 from '../../Lib/IllustrationCollectionMockups/NokomisMountain/NokomisMountainMockup4.AmeliaRensch.png';

//BeatlesIllustrationImages
import BeatlesIllustrationMockup1 from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesJack.png';
import BeatlesIllustrationMockup2 from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesQueen.png';
import BeatlesIllustrationMockup3 from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesKing.png';
import BeatlesIllustrationMockup4 from '../../Lib/IllustrationCollectionMockups/TheBeatlesFaceCards/BeatlesJoker.png';

//JagchowWebImages
import JagchowWebMockup1 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowCover.AmeliaRensch.png';
import JagchowWebMockup2 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup1.AmeliaRensch.png';
import JagchowWebMockup3 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup2.AmeliaRensch.png';
import JagchowWebMockup4 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup3.AmeliaRensch.png';
import JagchowWebMockup5 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup4.AmeliaRensch.png';
import JagchowWebMockup6 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup5.AmeliaRensch.png';
import JagchowWebMockup7 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup6.AmeliaRensch.png';
import JagchowWebMockup8 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup7.AmeliaRensch.png';
import JagchowWebMockup9 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup8.AmeliaRensch.png';
import JagchowWebMockup10 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup9.AmeliaRensch.png';
import JagchowWebMockup11 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup10.AmeliaRensch.png';
import JagchowWebMockup12 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup11.AmeliaRensch.png';
import JagchowWebMockup13 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup12.AmeliaRensch.png';
import JagchowWebMockup14 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup13.AmeliaRensch.png';
import JagchowWebMockup15 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup14.AmeliaRensch.png';
import JagchowWebMockup16 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup15.AmeliaRensch.png';
import JagchowWebMockup17 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup16.AmeliaRensch.png';
import JagchowWebMockup18 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup17.AmeliaRensch.png';
import JagchowWebMockup19 from '../../Lib/WebCollectionMockups/JagChowAppMockups/JagChowMockup18.AmeliaRensch.png';

//FyaWebImages
import FyaWebMockup1 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYAAppCover.AmeliaRensch.png';
import FyaWebMockup2 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.SplashPage.AmeliaRensch.png';
import FyaWebMockup3 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.LoginPage.AmeliaRensch.png';
import FyaWebMockup4 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.Homepage.AmeliaRensch.png';
import FyaWebMockup5 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.ArtEvents.AmeliaRensch.png';
import FyaWebMockup6 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.FeaturedArtists.AmeliaRensch.png';
import FyaWebMockup7 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.CalendarPage.AmeliaRensch.png';
import FyaWebMockup8 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.AccountPage.AmeliaRensch.png';
import FyaWebMockup9 from '../../Lib/WebCollectionMockups/FYAAppMockups/FYA.MessagingPage.AmeliaRensch.png';

const useStyles = makeStyles((theme) => ({
    imageListContainer: {
        position: 'relative',
        margin: '15px',
        overflow: 'hidden',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch', // Make items take up full height
        height: '90%', // Occupy 100% of the parent container's height
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
        flexDirection: 'column', // Change the direction to column on small screens
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(10px)',
        padding: "10px", // Add some padding to the modal content
    },

    titleBar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "10px", // Add margin at the bottom for separation
    },
}));

const Collection = ({ open, onClose, name, setSelectedImageData }) => {
    const classes = useStyles();
    const data = collections[name];
    const isMdUp = useMediaQuery('(min-width:800px)');
    const [selectedProject, setSelectedProject] = useState(null);
    let typographySize = "h2";
    if (!isMdUp) {
        typographySize = "h4"
    }

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
            <DialogTitle className={classes.titleBar}>
                {selectedProject ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseModal}
                        aria-label="back"
                    >
                        <ArrowBack />
                    </IconButton>
                ) : (
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
                        setSelectedImageData={setSelectedImageData}
                    />
                ) : (
                    // Render collection items
                    <Grid container>
                        {data?.map((item, index) => (
                            <Grid item key={index} xs={12} md={12} lg={6} xl={6} style={{ height: '40vh' }}>
                                <div className={classes.imageListContainer}>
                                    <div
                                        className={`overlay ${classes.overlay}`}
                                        onClick={() => handleOpenModal(item)}
                                    >
                                        <Typography variant={typographySize} style={{ color: 'white', textAlign: 'center' }}>
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
        {
            image: LogoPersonalThumbnail, title: 'Personal',
            images: [
                {
                    id: 1,
                    src: LogoImagesHandSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: LogoImagesHandSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: LogoImagesHandSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: LogoImagesDigitalSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: LogoImagesDigitalSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: LogoImagesDigitalSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: LogoImagesPersonalMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: LogoImagesPersonalMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: LogoImagesPersonalMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: LogoImagesPersonalMockup4,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: LogoApcThumbnail, title: 'APC',
            images: [
                {
                    id: 1,
                    src: ApcImagesHandSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: ApcImagesHandSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: ApcImagesHandSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: ApcImagesDigitalSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: ApcImagesDigitalSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: ApcImagesDigitalSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: ApcImagesDigitalSketch4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: ApcImagesDigitalSketch5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: ApcImagesDigitalSketch6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: ApcImagesLogoMockup1,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 11,
                    src: ApcImagesLogoMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 12,
                    src: ApcImagesLogoMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 13,
                    src: ApcImagesLogoMockup4,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: LogoBowlNoodlesThumbnail, title: 'Bowl O` Noodles',
            images: [
                {
                    id: 1,
                    src: BowlNoodesLogoMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: BowlNoodesLogoMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: BowlNoodesLogoMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: LogoFyaThumbnail, title: 'FYA',
            images: [
                {
                    id: 1,
                    src: FyaLogoMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: FyaLogoMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: FyaLogoMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        }
    ],
    web: [
        {
            image: WebJagchowThumbnail, title: 'Jagchow App',
            images: [
                {
                    id: 1,
                    src: JagchowWebMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: JagchowWebMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: JagchowWebMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: JagchowWebMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: JagchowWebMockup5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: JagchowWebMockup6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: JagchowWebMockup7,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: JagchowWebMockup8,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: JagchowWebMockup9,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: JagchowWebMockup10,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 11,
                    src: JagchowWebMockup11,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 12,
                    src: JagchowWebMockup12,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 13,
                    src: JagchowWebMockup13,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 14,
                    src: JagchowWebMockup14,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 15,
                    src: JagchowWebMockup15,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 16,
                    src: JagchowWebMockup16,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 17,
                    src: JagchowWebMockup17,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 18,
                    src: JagchowWebMockup18,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 19,
                    src: JagchowWebMockup19,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: WebFyaThumbnail, title: 'Find Your Art App',
            images: [
                {
                    id: 1,
                    src: FyaWebMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: FyaWebMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: FyaWebMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: FyaWebMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: FyaWebMockup5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: FyaWebMockup6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: FyaWebMockup7,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: FyaWebMockup8,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: FyaWebMockup9,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        }
    ],
    branding: [
        {
            image: BrandingBowlNoodlesThumbnail, title: 'Bowl O` Noodles',
            images: [
                {
                    id: 1,
                    src: BowlNoodlesBrandingMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: BowlNoodlesBrandingMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: BowlNoodlesBrandingMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: BowlNoodlesBrandingMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: BowlNoodlesBrandingMockup5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: BowlNoodlesBrandingMockup6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: BowlNoodlesBrandingMockup7,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: BowlNoodlesBrandingMockup8,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: BowlNoodlesBrandingMockup9,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: BowlNoodlesBrandingMockup10,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 11,
                    src: BowlNoodlesBrandingMockup11,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 12,
                    src: BowlNoodlesBrandingMockup12,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 13,
                    src: BowlNoodlesBrandingMockup13,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 14,
                    src: BowlNoodlesBrandingMockup14,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 15,
                    src: BowlNoodlesBrandingMockup15,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 16,
                    src: BowlNoodlesBrandingMockup16,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 17,
                    src: BowlNoodlesBrandingMockup17,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 18,
                    src: BowlNoodlesBrandingMockup18,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: BrandingApcThumbnail, title: 'APC',
            images: [
                {
                    id: 1,
                    src: ApcBrandingMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: ApcBrandingMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: ApcBrandingMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: ApcBrandingMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: ApcBrandingMockup5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: ApcBrandingMockup6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: ApcBrandingMockup7,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: ApcBrandingMockup8,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: ApcBrandingMockup9,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: ApcBrandingMockup10,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 11,
                    src: ApcBrandingMockup11,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 12,
                    src: ApcBrandingMockup12,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 13,
                    src: ApcBrandingMockup13,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 14,
                    src: ApcBrandingMockup14,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 15,
                    src: ApcBrandingMockup15,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 16,
                    src: ApcBrandingMockup16,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
            ]
        }
    ],
    photography: [
        {
            image: PhotographyStreetThumbnail, title: 'Street Art',
            images: [

            ]
        },
        {
            image: PhotographyPrisonThumbnail, title: 'Abandoned Prison',
            images: [

            ]
        },
        {
            image: PhotographyPortraitThumbnail, title: 'Portraits',
            images: [

            ]
        },
        {
            image: PhotographyAugustaThumbnail, title: 'Around Augusta',
            images: [

            ]
        },
        {
            image: PhotographyChimneyThumbnail, title: 'Chimney Rock',
            images: [

            ]
        },
        {
            image: PhotographyIrelandThumbnail, title: 'Ireland',
            images: [

            ]
        }
    ],
    editorial: [
        {
            image: EditorialGatsbyThumbnail, title: 'Great Gatsby Book Redesign',
            images: [
                {
                    id: 1,
                    src: EditorialGatsbyThumbnail,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
            ]
        },
        {
            image: EditorialAugustanThumbnail, title: 'The Augustan',
            images: [
                {
                    id: 1,
                    src: EditorialAugustanThumbnail,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
            ]
        },
        {
            image: EditorialBeatlesThumbnail, title: 'Beatles Magazine',
            images: [
                {
                    id: 1,
                    src: BeatlesEditorialHandSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: BeatlesEditorialHandSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: BeatlesEditorialHandSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: BeatlesEditorialHandSketch4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: BeatlesEditorialHandSketch5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: BeatlesEditorialHandSketch6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 7,
                    src: BeatlesEditorialDigitalSketch1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 8,
                    src: BeatlesEditorialDigitalSketch2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 9,
                    src: BeatlesEditorialDigitalSketch3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 10,
                    src: BeatlesEditorialDigitalSketch4,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 11,
                    src: BeatlesEditorialDigitalSketch5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 12,
                    src: BeatlesEditorialDigitalSketch6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 13,
                    src: BeatlesEditorialDigitalSketch7,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 14,
                    src: BeatlesEditorialMockup1,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 15,
                    src: BeatlesEditorialMockup2,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 16,
                    src: BeatlesEditorialMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 17,
                    src: BeatlesEditorialMockup4,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        },
        {
            image: EditorialTravelistaThumbnail, title: 'Travelista Magazine',
            images: [
                {
                    id: 1,
                    src: TravelistaEditorialMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: TravelistaEditorialMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: TravelistaEditorialMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: TravelistaEditorialMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 5,
                    src: TravelistaEditorialMockup5,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 6,
                    src: TravelistaEditorialMockup6,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
            ]
        }
    ],
    illustration: [
        {
            image: IllustrationOmaThumbnail, title: 'Oma',
            images: [
                {
                    id: 1,
                    src: OmaIllustrationMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: OmaIllustrationMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: OmaIllustrationMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: OmaIllustrationMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
            ]
        },
        {
            image: IllustrationRaftThumbnail, title: 'Nokomis Raft',
            images: [
                {
                    id: 1,
                    src: NokomisRaftIllustrationMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: NokomisRaftIllustrationMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: NokomisRaftIllustrationMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: NokomisRaftIllustrationMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
            ]
        },
        {
            image: IllustrationMountainThumbnail, title: 'Nokomis Mountain',
            images: [
                {
                    id: 1,
                    src: NokomisMountainIllustrationMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: NokomisMountainIllustrationMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: NokomisMountainIllustrationMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: NokomisMountainIllustrationMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
            ]
        },
        {
            image: IllustrationBeatlesThumbnail, title: 'Beatles Face Cards',
            images: [
                {
                    id: 1,
                    src: BeatlesIllustrationMockup1,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
                {
                    id: 2,
                    src: BeatlesIllustrationMockup2,
                    title: "Slide 2",
                    description: "Slide 2 Description"
                },
                {
                    id: 3,
                    src: BeatlesIllustrationMockup3,
                    title: "Slide 3",
                    description: "Slide 3 Description"
                },
                {
                    id: 4,
                    src: BeatlesIllustrationMockup4,
                    title: "Slide 1",
                    description: "Slide 1 Description"
                },
            ]
        }
    ]
}