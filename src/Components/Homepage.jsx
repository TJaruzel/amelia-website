import React from 'react';
import { Fab, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../Lib/BackgroundHomepage.png';

const useStyles = makeStyles((theme) => ({
  fullPageContainer: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: "#E6E3DB",
    backgroundImage: `url(${background})`, // Moved background image here
  },
  centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullPageContainer}>
      <Grid container item style={{marginTop:'450px'}}>
        <Grid item xs={12} className={classes.centeredContent}>
        <Typography variant='h2'>Hello!</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent} style={{marginTop:"20px"}}>
        <Typography variant='body1'>Using skills and experience to create innovative</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent} style={{marginBottom:"30px"}}>
        <Typography variant='body1'>and visual solutions through graphics.</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent}>
        <Fab variant="extended" color="secondary" style={{width:'8vw', fontSize:'20px'}}>
          Learn More
        </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;