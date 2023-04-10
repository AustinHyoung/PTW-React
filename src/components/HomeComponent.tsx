import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import * as S from '../styles/styles';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import DefaultModal from './modal/DefaultModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { initCount } from '../redux/action/count-actions';
import { initBoard } from '../redux/action/actions';

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
  const info = useSelector((state: RootState) => state.info.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      const response = await axios.get('http://localhost:8080/apis/create/board', { params: param });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const boardRouter = async (board_no: number, title: string) => {
    try {
      const response = await axios.get('http://localhost:8080/apis/board/initial', {
        params: { board_no: board_no, title: title },
      });

      console.log(response);
      dispatch(initBoard(response.data));
      //dispatch(initCount(response.data.count));

      navigate(`/board/${board_no}`);
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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(241, 242, 246)' }}>
      <h2 style={{ textAlign: 'center' }}>보 드</h2>

      <div
        style={{
          flex: 1,
          display: 'flex',
          position: 'relative',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            position: 'absolute',
            alignItems: 'center',
            padding: '40px 100px',
            overflow: 'auto',
          }}
        >
          {data?.map((item: listProps) => {
            return (
              // <Link to={`/board/${item.board_no}`} key={item.board_no}>
              //   <S.BoardItem>{item.title}</S.BoardItem>
              // </Link>
              <div onClick={() => boardRouter(item.board_no, item?.title)} key={item.board_no}>
                <S.BoardItem>{item.title}</S.BoardItem>
              </div>
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
