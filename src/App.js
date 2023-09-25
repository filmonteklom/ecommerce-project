// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header'; 
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/Registration';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard/Dashboard/Dashboard';
// import DashboardHeader from './Dashboard/Header/Header';
import LogoutButton from './components/LogoutButton/LogoutButton';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import SearchResults from './Dashboard/Search/SearchResult';
import './index.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Layout><LoginForm /></Layout>} />
        <Route path="/register" element={<Layout><RegistrationForm /></Layout>} />
 <Route path="/LogoutButton" element={<LogoutButton />} />
 <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
<Route path="/forgotpassword"element={<ForgotPassword />} />    
<Route path="/Resetpassword/*" element={ <ResetPassword />} />
<Route path="/search" element={<SearchResults />} />
   </Routes>
     </div>
    </Router>
  );
}

export default App;
