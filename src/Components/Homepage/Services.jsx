import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import service1 from '../../Lib/Icons/P5.RenschAmelia.LogoIcon.png';
import service2 from '../../Lib/Icons/P5.RenschAmelia.EditorialIcon.png';
import service3 from '../../Lib/Icons/P5.RenschAmelia.BrandingIcon.png';
import service4 from '../../Lib/Icons/P5.RenschAmelia.WebandMobileIcon.png';
import service5 from '../../Lib/Icons/P5.RenschAmelia.IllustrationIcon.png';
import service6 from '../../Lib/Icons/P5.RenschAmelia.PhotographyIcon.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerOffset: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '10vh',
  },
  services: {
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  serviceContainer: {
    padding: '35px',
  },
  service: {
    backgroundRepeat: 'no-repeat',
    height: '100px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
}));

const Services = () => {
  const classes = useStyles();
  const isMdUp = useMediaQuery('(min-width:800px)');

  const serviceData = [
    { image: service1, alt: 'Logo', text: 'LOGO' },
    { image: service2, alt: 'Editorial', text: 'EDITORIAL' },
    { image: service3, alt: 'Branding', text: 'BRANDING' },
    { image: service4, alt: 'Web', text: 'WEB' },
    { image: service5, alt: 'Illustration', text: 'ILLUSTRATION' },
    { image: service6, alt: 'Photography', text: 'PHOTOGRAPHY' },
  ];

  return (
    <Grid container className={isMdUp ? classes.container : classes.containerOffset}>
      <Grid container item xs={12} md={10} lg={8} xl={8} justifyContent="center">
        <Grid item xs={12} className={classes.services} style={{ justifyContent: 'center' }}>
          <Typography variant='h2' style={{ marginBottom: '60px', marginTop: '40px' }}>
            Services
          </Typography>
        </Grid>
        <Grid container item className={classes.services}>
          {serviceData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className={classes.serviceContainer}>
              <Link to={`/portfolio?jumpto=${service.alt}`} className={classes.link}>
                <div
                  className={classes.service}
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <Typography variant='h5' style={{ marginTop: '20px' }}>{service.text}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
