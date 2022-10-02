import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpeg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color='inherit'>
        <Typography variant="h2" align="center">Colexon</Typography>
        <img src={memories} alt="memories" height="60"></img>
      </AppBar>
      <Grow in>
        <Container container justify="space-between" alignItems="strech" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form/>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;