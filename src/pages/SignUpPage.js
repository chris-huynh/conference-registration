import React from 'react';
import Fab from '@material-ui/core/Fab'
import TextField from "@material-ui/core/TextField";
import {Container} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import '../styles/SignUpPage.css'

const SignUpPage = () => {
    return (
        <div>
            This is the register component
            <Container maxWidth='sm'>
                <Grid container spacing={1} justify="center">
                  <Grid item xs/>
                  <Grid item xs={9}>
                      <TextField autoFocus="true" required="true" label="Email Address" autoComplete="true" margin="normal" fullWidth InputProps={{disableUnderline: true}}/>
                  </Grid>
                  <Grid item xs/>
                  <Grid item xs={9}>
                      <TextField required="true" label="Password" type="password" margin="normal" fullWidth InputProps={{disableUnderline: true}} p={20}/>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField required="true" label="Confirm Password" type="password" margin="normal" fullWidth InputProps={{disableUnderline: true}}/>
                  </Grid>
                  <Grid item xs={12}>
                      <Fab variant="extended" color="primary">
                          Submit
                      </Fab>
                  </Grid>
                </Grid>
            </Container>
        </div>)
};

export default SignUpPage