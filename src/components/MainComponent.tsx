import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../styles/styles';
import Header from './layout/Header';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';

const MainComponent = () => {
  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);
  return (
    <>
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
            {leftSide && <LeftSide />}

            <div style={{ flex: 1, overflow: 'auto', padding: 6 }}>
              ddddddDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDdddddDDDDDDDDDDDDDDDDDDDDDDDD
            </div>
            {rightSide && <RightSide />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
