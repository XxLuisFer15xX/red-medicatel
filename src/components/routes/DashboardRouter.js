import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HeaderMenu } from '../molecules';
import { DrawerNavigation } from '../organisms';
import { Colaborators, Home } from '../pages';

const drawerWidth = 400;

export const DashboardRouter = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div style={{backgroundColor: '#f8fbfd'}}>
      <DrawerNavigation
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div
        style={{
          paddingLeft: `${drawerWidth}px`,
          width: '100%',
        }}>
        <div className='h-24 my-10'>
          <HeaderMenu onClick={handleDrawerToggle} />
        </div>
        <div style={{ overflowY: 'auto' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/colaborators" element={<Colaborators />} />
            <Route path="/" element={<Navigate to="/dashboard/home" />} />
            <Route path="*" element={<Navigate to="/page-error" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
