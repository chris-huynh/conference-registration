import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import {Container} from "@material-ui/core";

import '../styles/SignUpPage.css'

const SignUpPage = () => {
  return (
    <div>
      This is the register component
      <Container maxWidth="md">
        <TextField autoFocus="true" required="true" label="Email Address" autoComplete="true"/>
        <br/>
        <TextField required="true" label="Password" type="password"/>
        <br/>
        <Button variant="outlined" color="primary">
          Submit
        </Button>
      </Container>
    </div>)
};

export default SignUpPage