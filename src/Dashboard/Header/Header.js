// DashboardHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import './Header.css';
import SearchBar from '../Search/Search';



function DashboardHeader() {
  return (
    <div>
      
      <AppBar position="static">
      <Toolbar>
      <SearchBar />
         <Typography variant="h6" style={{ flexGrow: 1, height: '110px' }}>
         </Typography>
         <LogoutButton />
       </Toolbar>
     </AppBar>
     
    </div>
    
  );
}

export default DashboardHeader;
