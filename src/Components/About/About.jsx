import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../Lib/Backgrounds/AboutBackground.png';

const useStyles = makeStyles((theme) => ({
  fullPageContainer: {
    width: '80vw',
    height: '80vh',
    display: 'flex',
    margin: '0 auto', // Center the content
    marginTop: '12vh',
    overflow: 'hidden',
    backgroundSize: 'contain', // Adjusted background size
    backgroundPosition: 'center center',
    backgroundColor: "white",
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat'
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullPageContainer}>
      {/* Your content goes here */}
    </Grid>
  );
};

export default About;