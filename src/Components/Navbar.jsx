import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../Lib/512Logo.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100vw',
    height: '5vh',
    display: 'flex',
    alignItems: 'self-end',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingBottom:'10px',
  },
  logo: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '10vh',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
  },
  navbarContainer: {
    position: 'fixed',
    top: 0,
    width: '100vw',
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 1000,
    background: 'white',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.navbarContainer}>
      <Grid container item className={classes.logo}></Grid>
      <Grid container item className={classes.navbar}>
        <Stack direction="row" spacing={2}>
          <Link to="/" className={classes.link}>
            <Button style={{color:'#82C1CA', fontSize:'1.2em', textTransform: 'none'}}>Home</Button>
          </Link>
          <Link to="/portfolio" className={classes.link}>
            <Button style={{color:'#82C1CA', fontSize:'1.2em', textTransform: 'none'}}>Portfolio</Button>
          </Link>
          <Link to="/about" className={classes.link}>
            <Button style={{color:'#82C1CA', fontSize:'1.2em', textTransform: 'none'}}>About</Button>
          </Link>
          <Link to="/resume" className={classes.link}>
            <Button style={{color:'#82C1CA', fontSize:'1.2em', textTransform: 'none'}}>Resume</Button>
          </Link>
          <Link to="/contact" className={classes.link}>
            <Button style={{color:'#82C1CA', fontSize:'1.2em', textTransform: 'none'}}>Contact</Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Navbar;