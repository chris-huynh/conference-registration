import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import {Container} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import '../styles/SignUpPage.css'

const SignUpPage = () => {
    return (
        <div>
            This is the register component
            <Container maxWidth='md'>
                <Grid container spacing={3}>
                    <Grid item xs={3} />
                    <Grid item xs={6}>
                        <TextField variant="filled" autoFocus="true" required="true" label="Email Address" autoComplete="true" margin="normal" fullWidth/>
                    </Grid>
                    <Grid item xs={3} />
                    <Grid item xs={3} />
                    <Grid item xs={6}>
                        <TextField variant="filled" required="true" label="Password" type="password" margin="normal" fullWidth/>
                    </Grid>
                    <Grid item xs={3} />
                    <Grid item xs={12}>
                        <Button variant="outlined" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>)
};

export default SignUpPage