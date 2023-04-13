import React, { useState } from 'react';
import * as S from '../../styles/styles';
import DefaultModal from '../modal/DefaultModal';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LeftSide = () => {
  // content, modal open boolean, outside click close
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const outsideClose = () => {
    setModalIsOpen(false);
  };

  function ModalContent() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <span onClick={() => setModalIsOpen(false)} style={{ cursor: 'pointer' }}>
            <Icon path={mdiClose} size={1.2} />
          </span>
        </div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ margin: 5, wordWrap: 'break-word', whiteSpace: 'normal' }}>
            <span style={{ color: 'red' }}>주의: </span>삭제 후 해당 보드에 대한 모든 데이터는 영구적으로 삭제됩니다. 삭제된
            데이터를 복구할 수 없으니 신중히 결정해 주세요. 정말 삭제하시겠습니까?
          </div>
          <S.LoginBtn
            onClick={() => {
              deleteBoardData();
              setModalIsOpen(false);
            }}
          >
            예
          </S.LoginBtn>
        </div>
      </div>
    );
  }

  const deleteBoardData = async () => {
    console.log('삭제');

    try {
      const response = await axios.delete('http://localhost:8080/apis/delete/board');
      console.log(response);
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.SideMenu>
        <S.BoardDelete onClick={() => setModalIsOpen(true)} style={{ cursor: 'pointer' }}>
          삭제하기
        </S.BoardDelete>
        {modalIsOpen && <DefaultModal isOpen={modalIsOpen} content={ModalContent()} outsideClose={outsideClose} />}
      </S.SideMenu>
    </>
  );
};

export default LeftSide;
