import React from 'react';
import { Button, TextField, Container, Paper, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration process
    // In a real-world scenario, you would send the form data to your API.
    setTimeout(() => {
      // After registration, navigate to the login page.
      navigate('/login');
    }, 1000);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', margin: '50px',height: '30rem', width: '29rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleRegister} style={{ width: '100%', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button component={Link} to="/login" fullWidth>
                Already have an account? Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;
