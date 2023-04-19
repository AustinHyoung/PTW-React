import { mdiChat, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios from 'axios';
import { useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCard } from '../redux/reducer/cardReducer';
import { setList } from '../redux/reducer/listReducer';
import { RootState } from '../redux/store';
import * as Icons from '../styles/iconStyles';
import * as S from '../styles/styles';
import DragDropContextComponent from './dnd/DragDropContextComponent';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';
import { increase, decrease, numIncrease } from '../redux/action/count-actions';
import Counter from './Counter';
import { PathPayload } from '../redux/types';

const BoardComponent = () => {
  const { id } = useParams();

  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);

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
              {/* <S.IconBtn onClick={() => setRightSide((rightSide) => !rightSide)}>
                <Icons.ChatIcon path={mdiChat} size={1} />
              </S.IconBtn> */}
            </div>
          </S.BoardHeader>
          <S.FlexBox>
            {leftSide && <LeftSide />}
            <S.DndBox>
              <DragDropContextComponent id={id} />
              {/* <Counter
                count={count}
                onIncrease={() => onIncrease({ id: id })}
                onDecrease={onDecrease}
                onNumIncrease={onNumIncrease}
              /> */}
            </S.DndBox>
            {/* {rightSide && <RightSide />} */}
          </S.FlexBox>
        </S.MainDisplay>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
