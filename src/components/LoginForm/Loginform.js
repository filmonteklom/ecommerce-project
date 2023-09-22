import React, { useState } from 'react';
import { Button, TextField, Container, Paper, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function LoginForm() {
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here, validate user credentials
    const { username, password } = formData;

    if (username === 'exampleUser' && password === 'examplePassword') {
      // Assuming login is successful, set the loggedIn state to true
      setLoggedIn(true);
    } else {
      // Handle login failure, show an error message, etc.
      alert('Login failed. Please check your credentials.');
    }
  };

  // Redirect to the dashboard if logged in
  // if (loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }


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
                value={formData.username}
            onChange={handleInputChange}
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
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button component={Link} to="/register" fullWidth>
                Don't have an account? Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button component={Link} to="/forgot-password" fullWidth>
                Forgot Password?
              </Button>
            </Grid>
				<Grid item xs={12}>
              <Button component={Link} to="/forgot-password" fullWidth>
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
