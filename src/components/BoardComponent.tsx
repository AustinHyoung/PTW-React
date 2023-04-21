import { mdiChat, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios from 'axios';
import { useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import * as Icons from '../styles/iconStyles';
import * as S from '../styles/styles';
import DragDropContextComponent from './dnd/DragDropContextComponent';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';

const BoardComponent = () => {
  const { id } = useParams();

  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);

  return (
    <>
      <S.MainDisplay>
        <S.MainColor>
          <S.BoardHeader>
            <div>
              <S.IconBtn onClick={() => setLeftSide((leftSide) => !leftSide)}>
                <Icon path={mdiMenu} size={1} />
              </S.IconBtn>
            </div>
            <div>
              {/* <S.IconBtn onClick={() => setRightSide((rightSide) => !rightSide)}>
                <Icons.ChatIcon path={mdiChat} size={1} />
              </S.IconBtn> */}
            </div>
          </S.BoardHeader>
          <S.FlexBox>
            {leftSide && <LeftSide />}
            <S.DndBox>
              <DragDropContextComponent id={id} />
            </S.DndBox>
            {/* {rightSide && <RightSide />} */}
          </S.FlexBox>
        </S.MainColor>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
