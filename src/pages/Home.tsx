import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from '../styles/styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer';

const Home = () => {
  const data = useSelector((state: RootState) => state.persistedReducer.data);
  console.log(data);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          backgroundColor: 'rgb(241, 242, 246)',
          flex: 1,
          padding: '40px 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>bOARD</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Link to="/board">
            <S.BoardItem>1번째 보드</S.BoardItem>
          </Link>
          <S.BoardItem>1번째 보드</S.BoardItem>
          <S.BoardItem>1번째 보드</S.BoardItem>
          <S.BoardItem>+ 새로 만들기</S.BoardItem>
        </div>
      </div>
    </div>
  );
};

export default Home;
