import React, { useState } from 'react';
import { Button, TextField, Container, Paper, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation, directly set loggedIn to true
    setLoggedIn(true);
    navigate('/dashboard/');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === '' && password === '') {
  //     setLoggedIn(true);
  //   } else {
  //     alert('Login failed. Please check your credentials.');
  //   }
  // };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', margin: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button component={Link} to="/register" fullWidth>
                Don't have an account? Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button component={Link} to="/forgotpassword" fullWidth>
                Forgot Password?
              </Button>
            </Grid>
				<Grid item xs={12}>
              <Button component={Link} to="/Resetpassword" fullWidth>
                Reset Password?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginForm;
