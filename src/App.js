import { Grid } from '@mui/material';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Grid container>
      <Navbar/>
      <Homepage/>
    </Grid>
  );
}

export default App;
