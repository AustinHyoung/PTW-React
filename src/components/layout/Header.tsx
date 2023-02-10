import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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
      <div style={{ padding: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#4b4b4b', borderBottom: '1px solid rgb(110, 110, 110, 0.3)' }}>
        <div>123</div>
        <div>
          <button onClick={doLogout}>로그아웃</button>
        </div>
      </div>
    </>
  );
};

export default Header;
