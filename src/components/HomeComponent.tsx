import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../reducer';
import * as S from '../styles/styles';
import DefaultModal from './modal/DefaultModal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const outsideClose = () => {
    setModalIsOpen(false);
  };

  function ModalContent() {
    return (
      <>
        <div>hello this is modal</div>
        <button onClick={() => setModalIsOpen(false)}>close button</button>
      </>
    );
  }

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
          <S.BoardItem onClick={() => setModalIsOpen(true)}>+ 새로 만들기</S.BoardItem>
        </div>
      </div>
      {modalIsOpen && <DefaultModal isOpen={modalIsOpen} content={ModalContent()} outsideClose={outsideClose} />}
    </div>
  );
};

export default HomeComponent;
