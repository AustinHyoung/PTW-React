import axios from 'axios';
import React from 'react';
import * as S from '../styles/styles';
import Header from './layout/Header';
import DragAndDrop from './dnd/DragAndDrop';

const MainComponent = () => {
  return (
    <>
      <Header />
      <S.MainContent>
        <div style={{ padding: 6 }}>
          <DragAndDrop />
        </div>
      </S.MainContent>
    </>
  );
};

export default MainComponent;
