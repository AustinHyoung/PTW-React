import React, { useEffect, useState } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Find from './pages/Find';
import Board from './pages/Board';
import Home from './pages/Home';
import My from './pages/My';
import PwChange from './pages/PwChange';
import PrivateRoute from './utils/privateRouter';

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/my" element={<My />} />
        </Route>
        <Route path="/my/change" element={<PwChange />} />
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
