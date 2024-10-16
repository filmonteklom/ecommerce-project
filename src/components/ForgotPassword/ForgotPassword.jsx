import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Password reset request sent to ${email}`);
    } else {
      setMessage('Please enter your email.');
    }

  };

  return (
    <Container maxWidth="sm" style={{padding: '100px'}}>
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit} >
        <TextField 
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Reset Password
        </Button>
      </form>
      {message && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        Remember your password? <Link to="/login">Log in</Link>
      </Typography>
    </Container>
  );
}

export default ForgotPassword;
