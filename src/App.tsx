import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Find from './pages/Find';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/find" element={<Find />} />
      <Route path="/regist" element={<Regist />} />
    </Routes>
  );
};

export default App;
