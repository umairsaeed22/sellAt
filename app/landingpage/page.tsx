// pages/index.tsx
import React from 'react';
import LandingPage from '../landingpage/landingpage';

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* Adjust max-w-7xl to your desired max-width */}
      <LandingPage/>
    </div>
  );
};

export default HomePage;
