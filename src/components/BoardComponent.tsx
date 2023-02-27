import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../styles/styles';
import * as Icons from '../styles/iconStyles';
import Header from './layout/Header';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';
import Icon from '@mdi/react';
import { mdiMenu, mdiChat } from '@mdi/js';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer';

const BoardComponent = () => {
  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);

  const data = useSelector((state: RootState) => state.persistedReducer.data);
  console.log(data);

  return (
    <>
      <S.MainDisplay>
        <S.MainDisplay style={{ backgroundColor: '#f1f2f6' }}>
          <S.BoardHeader>
            <div>
              <S.IconBtn onClick={() => setLeftSide((leftSide) => !leftSide)}>
                <Icon path={mdiMenu} size={1} />
              </S.IconBtn>
            </div>
            <div>
              <S.IconBtn onClick={() => setRightSide((rightSide) => !rightSide)}>
                <Icons.ChatIcon path={mdiChat} size={1} />
              </S.IconBtn>
            </div>
          </S.BoardHeader>
          <S.FlexBox>
            {leftSide && <LeftSide />}
            <S.DndBox>ddddddDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDdddddDDDDDDDDDDDDDDDDDDDDDDDD</S.DndBox>
            {rightSide && <RightSide />}
          </S.FlexBox>
        </S.MainDisplay>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
