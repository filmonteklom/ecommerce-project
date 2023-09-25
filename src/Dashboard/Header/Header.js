// DashboardHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import './Header.css';

function DashboardHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, height: '110px' }}>
          Dashboard
        </Typography>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
