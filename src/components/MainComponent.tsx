import axios from 'axios';
import React from 'react';
import * as S from '../styles/styles';
import Header from './layout/Header';

const MainComponent = () => {
  return (
    <>
      <Header />
      <S.MainContent>
        <div style={{ padding: 6 }}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </S.MainContent>
    </>
  );
};

export default MainComponent;
