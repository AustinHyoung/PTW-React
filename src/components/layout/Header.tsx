import axios from 'axios';
import React from 'react';
import * as S from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiMagnify } from '@mdi/js';

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
        <S.LeftContents>
          <li>Plan The Work</li>
        </S.LeftContents>
        <S.RightContents>
          <S.RightList style={{ position: 'relative' }}>
            <Icon path={mdiMagnify} size={1} style={{ position: 'absolute', top: 5, left: 15 }} />
            <input style={{ border: '1px solid black', borderRadius: 4, margin: '0 8px', padding: '0 8px 0 40px', height: 32, width: 200, fontSize: 14 }} />
          </S.RightList>
          <S.RightList style={{ padding: 4 }}>
            <Icon path={mdiAccountCircle} size={1.5} color="blue" />
          </S.RightList>
        </S.RightContents>
      </S.HeaderBox>
    </>
  );
};

export default Header;
