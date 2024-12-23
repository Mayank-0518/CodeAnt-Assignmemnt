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

const App = () => {
  const [type, setType] = useState('saas');

  const mainCardData = {
    icon: logo,
    title: 'AI to Detect & Autofix Bad Code',
    stats: [
      { label: 'Language Support', value: '30+' },
      { label: 'Developers', value: '10K+' },
      { label: 'Hours Saved', value: '100K+' },
    ],
  };

  const statsCardData = {
    icon: sticon,
    title: 'Issues Fixed',
    value: '500K+',
    change: '14%',
    changeText: '↑ 14% This week',
  };

  return (
    <Provider store={store}>
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gray-50">
        <div className="hidden md:flex flex-col items-start justify-center bg-white p-8 lg:w-1/2 relative">
          <div className="absolute bottom-0 left-0 transform">
            <img
              src={watermark}
              alt="graphic"
              className="opacity-10 w-[300px]"
            />
          </div>

          <div className="relative w-full bottom-24 left-16">
            <MainCard
              {...mainCardData}
            />
            <div className="max-w-full w-[270px] absolute left-72 top-32">
              <StatsCard
               {...statsCardData}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow bg-gray-50 p-6 lg:w-1/2">
          <div className="hidden md:block max-w-sm w-full">
            <Login type={type} onToggleType={setType} />
          </div>
          <div className="md:hidden max-w-sm w-full">
            <LoginMobile type={type} onToggleType={setType} />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
