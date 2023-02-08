import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Find from './pages/Find';
import Main from './pages/Main';
import PrivateRoute from './utils/privateRouter';

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/" element={<Main />} />
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
