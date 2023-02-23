import React, { useState } from 'react';
import * as S from '../../styles/styles';
import DefaultModal from '../modal/DefaultModal';
import Modal from 'react-modal'


const LeftSide = () => {
  // content, modal open boolean, outside click close
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const outsideClose = () => {
    setModalIsOpen(false)
  }

  function ModalContent() {
    return (
      <>
       <div>hello this is modal</div>
        <button onClick={() => setModalIsOpen(false)}>close button</button>
      </>
     
    )
  }


  return (
    <>
      <S.SideMenu>
        <div onClick={() => setModalIsOpen(true)}>초대하기</div>
        <div>참여자</div>
        {modalIsOpen && <DefaultModal isOpen={modalIsOpen} content={ModalContent()} outsideClose={outsideClose} />}
      </S.SideMenu>
    </>
  );
};

export default LeftSide;
