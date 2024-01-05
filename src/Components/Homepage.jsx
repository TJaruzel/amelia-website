
import React from 'react';
import Container from '@mui/material/Container';
import background from '../Lib/purpleBack.jpg';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import '../index.css';

export const Homepage = () => {
  const useStyles = makeStyles((theme) => ({
    fullPageContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'hidden',
    },
    gillSans: {
      fontFamily: 'CustomFont',
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.fullPageContainer} style={{ backgroundImage: `url(${background})` }}>
      <Grid container item style={{ minHeight: '100vh' }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={12} lg={4} style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <p className={classes.gillSans}>Amelia Rensch</p>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;