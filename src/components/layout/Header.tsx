import axios from 'axios';
import React from 'react';
import * as S from '../../styles/styles';
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
      <S.HeaderBox>
        <ul style={{ padding: 6 }}>
          <li>ptw</li>
          <li>ptw</li>
        </ul>
        <ul style={{ padding: 6 }}>
          <li>user</li>
          <li>user</li>
        </ul>
      </S.HeaderBox>
    </>
  );
};

export default Header;
