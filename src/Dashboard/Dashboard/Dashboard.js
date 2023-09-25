import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Container, Drawer, List, ListItem, ListItemText } from '@mui/material';


// Dashboard Home Component
const DashboardHome = () => <div>Dashboard Home</div>;

// Orders Component
const Orders = () => <div>Orders Page</div>;

// Inventory Component
const Inventory = () => <div>Inventory Page</div>;

// Main Dashboard Component
const Dashboard = () => {
  return (
    <Container maxWidth="xl" style={{ display: 'flex' }}>
      <Drawer variant="permanent" style={{ width: '240px', flexShrink: 0 }}>
        <List>
          <ListItem button component={Link} to="/dashboard/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/orders">
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/inventory">
            <ListItemText primary="Inventory" />
          </ListItem>
        </List>
      </Drawer>
      <Container style={{ flexGrow: 1, marginLeft: '240px' }}>
      
        <Routes> 
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Dashboard;
