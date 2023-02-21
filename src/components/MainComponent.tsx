import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../styles/styles';
import Header from './layout/Header';
import LeftSide from './layout/LeftSide';

const MainComponent = () => {
  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);
  console.log(leftSide);
  console.log(rightSide);
  return (
    <>
      {/* <Header />

      <S.MainContent>
        <div style={{ padding: 6, border: '1px solid red', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <button onClick={() => setLeftSide((leftSide) => !leftSide)}>menu</button>
          </div>
          <div>
            <button onClick={() => setRightSide((rightSide) => !rightSide)}>chat</button>
          </div>
        </div>
        <div style={{ height: 'auto' }}>
          <LeftSide />
        </div>
      </S.MainContent> */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header />
        <div style={{ backgroundColor: '#f1f2f6', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ padding: 6, border: '1px solid red', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <button onClick={() => setLeftSide((leftSide) => !leftSide)}>menu</button>
            </div>
            <div>
              <button onClick={() => setRightSide((rightSide) => !rightSide)}>chat</button>
            </div>
          </div>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flex: 1 }}>1</div>
            <div style={{ flex: 3 }}>2</div>
            <div style={{ flex: 1 }}>3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
