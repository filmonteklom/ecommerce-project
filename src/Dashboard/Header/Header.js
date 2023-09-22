// DashboardHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function DashboardHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard Home
        </Button>
        {/* Add more dashboard-specific navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
