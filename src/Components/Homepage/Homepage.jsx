import React from 'react';
import { Fab, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../Lib/BackgroundHomepage.png';
import Services from './Services';

const useStyles = makeStyles((theme) => ({
  fullPageContainer: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
    marginTop: '15vh',
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
  const isMdUp = useMediaQuery('(min-width:800px)');

  return (
    <Grid container>
    {isMdUp && <Grid container className={classes.fullPageContainer}>
      <Grid container item style={{marginTop:'450px'}}>
        <Grid item xs={12} className={classes.centeredContent}>
        <Typography variant='h2' style={{color: '#425162'}}>Hello!</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent} style={{marginTop:"20px"}}>
        <Typography variant='body1' style={{color: '#425162'}}>Using skills and experience to create innovative</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent} style={{marginBottom:"30px"}}>
        <Typography variant='body1' style={{color: '#425162'}}>and visual solutions through graphics.</Typography>
        </Grid>
        <Grid item xs={12} className={classes.centeredContent}>
        <Fab
              variant="extended"
              sx={{
                fontSize: '25px',
                color: '#E6E3DB',
                fontFamily: 'GillSans',
                backgroundColor: '#425162',
                textTransform: 'none',
                paddingLeft: '60px',
                paddingRight: '60px',
                '&:hover': {
                  backgroundColor: '#82c1cb',
                },
              }}
            >
          Learn More
        </Fab>
        </Grid>
      </Grid>
    </Grid>}
    <Grid container>
      <Services/>
    </Grid>
    </Grid>
  );
};

export default Homepage;