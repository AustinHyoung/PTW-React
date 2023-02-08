import React, { useEffect } from 'react';
import axios from 'axios';
import LoginComponent from '../components/LoginComponent';
import { RootState } from 'src/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { sessionInfo } from 'src/reducer/session';

const Login = () => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

export default Login;
