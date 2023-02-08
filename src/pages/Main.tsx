import React, { useEffect } from 'react';
import MainComponent from '../components/MainComponent';

const Main = () => {
  useEffect(() => {
    if (localStorage.getItem('user_session') === null || localStorage.getItem('user_session') === undefined) {
      window.location.replace('/login');
    }
  }, []);

  return (
    <>
      <MainComponent />
    </>
  );
};

export default Main;
