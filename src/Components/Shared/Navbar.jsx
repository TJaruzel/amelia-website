import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../Lib/Logos/512Logo.png';

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',  // Adjust padding as needed
    zIndex: 1000,
    background: 'white',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '100px',  // Set a specific width for the logo
    height: 'auto',  // Maintain the aspect ratio
    marginBottom: '10px',  // Adjust margin as needed
  },
  link: {
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const isMdUp = useMediaQuery('(min-width:800px)');

  return (
    <Grid container className={classes.navbarContainer}>
      {isMdUp && <Link to="/" className={classes.link}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </Link>}
      <Grid container item justifyContent={'center'}>
        <Link to="/" className={classes.link}>
          <Button style={{ color: '#82C1CA', fontSize: '1.2em', textTransform: 'none' }}>Home</Button>
        </Link>
        <Link to="/portfolio" className={classes.link}>
          <Button style={{ color: '#82C1CA', fontSize: '1.2em', textTransform: 'none' }}>Portfolio</Button>
        </Link>
        <Link to="/about" className={classes.link}>
          <Button style={{ color: '#82C1CA', fontSize: '1.2em', textTransform: 'none' }}>About</Button>
        </Link>
        {/* <Link to="/resume" className={classes.link}>
          <Button style={{ color: '#82C1CA', fontSize: '1.2em', textTransform: 'none' }}>Resume</Button>
        </Link> */}
        <Link to="/contact" className={classes.link}>
          <Button style={{ color: '#82C1CA', fontSize: '1.2em', textTransform: 'none' }}>Contact</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;