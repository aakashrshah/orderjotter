import React from 'react';
import { Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PricingPage from './pages/PricingPage/PricingPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';

import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6" color="inherit" style={{ textTransform: 'none' }}>
              Order Jotter
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <div className="content">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/interests" component={CategoryPage} />
        <Route exact path="/pricing" component={PricingPage} />
        <Route exact path="/explore" component={DiscoverPage} />
        <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
      </div>
    </React.Fragment>
  );
}
