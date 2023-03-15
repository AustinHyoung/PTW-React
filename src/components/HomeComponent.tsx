import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../reducer';
import * as S from '../styles/styles';

interface listProps {
  board_no: number;
  title?: string;
}

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:8080/apis/boardlist');
  return data;
};

const HomeComponent = () => {
  const info = useSelector((state: RootState) => state.persistedReducer.data);
  const { data } = useQuery('data', fetchData);
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
          {data?.map((item: listProps) => {
            return (
              <Link to={`/board/${item.board_no}`} key={item.board_no}>
                <S.BoardItem>{item.title}</S.BoardItem>
              </Link>
            );
          })}
          <S.BoardItem>+ 새로 만들기</S.BoardItem>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
