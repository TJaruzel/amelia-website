import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        textAlign: 'center',
        padding: '20px',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container style={{ marginTop: '30px' }}>
            <Grid container item>
                <Grid item xs={12} className={classes.footerContainer}>
                    <Typography variant='h5'>AMELIA RENSCH</Typography>

                    <Typography variant='h6'>amelia@arensch.com</Typography>

                    <Typography variant='h6'>(706) 631-8074</Typography>

                    <Typography variant='h6'>©2023 by Amelia Rensch</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;