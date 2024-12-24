import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import LoginMobile from './components/MobileLogin';
import MainCard from './components/MainCard';
import StatsCard from './components/StatsCard';
import watermark from "./assets/Subtract.png";
import sticon from "./assets/gp.png";
import logo from "./assets/logo.png";
import LoginPage from './pages/LoginPage';
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <Outlet/>
  );
};

export default App;
