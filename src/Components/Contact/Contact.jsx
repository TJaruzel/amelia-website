import React from 'react';
import { Fab, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerOffset: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '25vh',
  },
  chatForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.containerOffset}>
      <Grid container item xs={11} lg={6} spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h4'><b>Let's Chat</b></Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6'>Phone</Typography>
          <Typography variant='h6'>(706) 631- 8074</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6'>Email</Typography>
          <Typography variant='h6'>amelia@arensch.com</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField label="First Name" color='primary' fullWidth={true} required={true} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Last Name" fullWidth={true} required={true} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Email" fullWidth={true} required={true} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" fullWidth={true} required={true} />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
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
              zIndex: '900',
              '&:hover': {
                backgroundColor: '#82c1cb',
              },
            }}
          >
            Send
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;