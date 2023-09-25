// DashboardHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Hidden } from '@mui/material';
// import { Link } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import './Header.css';
import SearchBar from '../Search/Search';



function DashboardHeader() {
  return (
    <div>
      
      <AppBar position="static">
      <Toolbar>
      <Grid container alignItems="center">
      <Hidden xsDown>
              <Grid item sm={6}>
                <SearchBar />
              </Grid>
            </Hidden>
      {/* <SearchBar /> */}

                  {/* Always visible */}
                  <Grid item xs={6} sm={4}>
              <Typography variant="h6" style={{ flexGrow: 1, height: '110px' }}>
                {/* Your title or logo here */}
              </Typography>
            </Grid>

         {/* <Typography variant="h6" style={{ flexGrow: 1, height: '110px' }}>
         </Typography> */}
         {/* Hidden on sm and md screens, visible otherwise */}
         <Hidden smUp>
              <Grid item xs={6}>
                <SearchBar />
              </Grid>
            </Hidden>
               {/* Always visible */}
               <Grid item xs={6} sm={2}>
              <LogoutButton />
            </Grid>
          </Grid>
         {/* <LogoutButton /> */}
         {/* </Grid> */}
       </Toolbar>
     </AppBar>
    </div>
    
  );
}

export default DashboardHeader;
