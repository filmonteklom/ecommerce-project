// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import LoginForm from './components/LoginForm/Loginform';
import RegistrationForm from './components/RegistrationForm/Registration';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import DashboardHeader from './Dashboard/Header/Header';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route
            path="/login"
            element={
              <Layout>
                <LoginForm />
              </Layout>
            }
          />
            <Route
            path="/register"
            element={
              <Layout>
                <RegistrationForm />
              </Layout>
            }
          />
           <Route
            path="/dashboard"
            element={
              <Layout header={<DashboardHeader />}>
                <Dashboard />
              </Layout>
            }
          />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/Reset-password" component={ResetPassword} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
