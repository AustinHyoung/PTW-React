import React, { useEffect, useState } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Find from './pages/Find';
import Board from './pages/Board';
import Home from './pages/Home';
import PrivateRoute from './utils/privateRouter';

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Route>

      <Route element={<PrivateRoute authentication={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/find" element={<Find />} />
        <Route path="/regist" element={<Regist />} />
      </Route>
    </Routes>
  );
};

export default App;
