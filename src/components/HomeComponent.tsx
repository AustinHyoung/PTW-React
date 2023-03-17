import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../reducer';
import * as S from '../styles/styles';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import DefaultModal from './modal/DefaultModal';
import { SubmitHandler, useForm } from 'react-hook-form';

interface listProps {
  board_no: number;
  title?: string;
}

interface FormValue {
  title: string;
}

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:8080/apis/boardlist');
  return data;
};

const HomeComponent = () => {
  const info = useSelector((state: RootState) => state.persistedReducer.data);
  const { data } = useQuery('data', fetchData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const outsideClose = () => {
    setModalIsOpen(false);
  };

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    doCreateBoard(data);
    setModalIsOpen(false);
  };

  const doCreateBoard = async (param: FormValue) => {
    try {
      await axios.get('http://localhost:8080/apis/create/board', { params: param });
    } catch (err) {
      console.log(err);
    }
  };

  function ModalContent() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <span onClick={() => setModalIsOpen(false)} style={{ cursor: 'pointer' }}>
            <Icon path={mdiClose} size={1.2} />
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2>보드 생성</h2>
          <div style={{ marginTop: 10, width: '100%' }}>
            <div style={{ lineHeight: 2 }}>보드 제목</div>
            <S.SetInput type="text" {...register('title', { required: true })} />
            <S.LoginBtn style={{ width: '100%', margin: 0, marginTop: 30 }}>보드 생성</S.LoginBtn>
          </div>
        </form>
      </div>
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
