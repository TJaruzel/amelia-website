import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100vw',
    height: '15vh',
    display: 'flex',
    alignItems: 'self-end',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item className={classes.navbar}>
        <Stack direction="row" spacing={2}>
            <Button color="secondary">Home</Button>
            <Button color="secondary">Portfolio</Button>
            <Button color="secondary">About</Button>
            <Button color="secondary">Resume</Button>
            <Button color="secondary">Contact</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Navbar;