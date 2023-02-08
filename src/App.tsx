import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Find from './pages/Find';
import Main from './pages/Main';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/find" element={<Find />} />
      <Route path="/regist" element={<Regist />} />
    </Routes>
  );
};

export default App;
