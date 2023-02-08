import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {
  const navigate = useNavigate();
  const doLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/apis/logout');
      console.log(response);
      sessionStorage.clear();
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <div>Mainfdadsfasdfadsfasdfdsfasdfsadfdfadsfdsfdsfdf</div>
      <button onClick={doLogout}>로그아웃</button>
    </>
  );
};

export default MainComponent;
