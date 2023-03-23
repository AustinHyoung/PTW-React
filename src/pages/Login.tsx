import React, { useEffect } from 'react';
import axios from 'axios';
import LoginComponent from '../components/LoginComponent';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

export default Login;
