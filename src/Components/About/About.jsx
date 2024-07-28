import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../Lib/Backgrounds/AboutBackground.png';
import Resume from '../../Lib/Resume/IS.RenschAmelia.Resume.pdf'

const useStyles = makeStyles(() => ({
  fullPageContainer: {
    width: '80vw',
    height: '1000px',
    display: 'flex',
    margin: '0 auto', // Center the content
    marginTop: '12vh',
    overflow: 'hidden',
    backgroundSize: 'contain', // Adjusted background size
    backgroundPosition: 'center center',
    backgroundColor: "white",
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    position: 'relative', // Set to relative for absolute positioning of text
  },
  textContent: {
    position: 'absolute',
    top: '60%', // Adjust this value to position the text correctly
    left: '40%', // Adjust this value to position the text correctly
    width: '55%', // Adjust this value to control text width
    maxWidth: '1200px',
    transform: 'translateY(-50%)', // Center the text vertically
    padding: '1em', // Optional: Add padding for better spacing
    fontSize: '3vw', // Responsive font size
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.fullPageContainer}>
        <div className={classes.textContent}>
          <Typography>
            Coming from a family of photographers, I always figured I would follow in their footsteps and pursue a path in photography.
            Growing up in Augusta, Georgia, I practiced numerous styles of photography including black and white, landscape, studio, and portrait.
            I found street photography to be the most fulfilling as it consists of many candid moments in life in which we often do not think about having much value.
            I consider these moments in our life to be the most important.
            However, throughout my schooling at Augusta University, I began to explore and experiment in different mediums and disciplines of art and ultimately discovered a new passion of mine: Graphic Design.
            I look for novel and contrasting views to integrate into my artwork to build up to my overall goal of incorporating the two disciplines I am most passionate about: photography and graphic design.
          </Typography>
          <br />
          <Typography>
            I often begin my creative process with brainstorming techniques and experimentation; this includes research, sketches, mind maps, and feedback to truly explore the meaning behind my work.
            My goal is to integrate my background in photography into my graphic design to create meaningful pieces that will bring forth a deeper understanding of the overall artwork.
            While I strive to catch the viewers' attention and really make them contemplate the meaning behind my artwork, I believe it is important to leave room for them to formulate their own meaning.
            After all, artwork is not a linear way of thinking, and it can always have an underlying meaning to different people; that is the beauty of it.
          </Typography>
        </div>
      </Grid>
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Divider style={{ marginBottom: '20px', marginTop: '20px' }} />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src={Resume} width={"87%"} height={"1400px"} title="Resume"></iframe>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;