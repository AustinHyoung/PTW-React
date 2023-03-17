import { mdiChat, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/reducer';
import * as Icons from '../styles/iconStyles';
import * as S from '../styles/styles';
import DragDropContextComponent from './dnd/DragDropContextComponent';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';

const ItemsData = [
  { id: 'item1', content: '아이템1' },
  { id: 'item2', content: '아이템2' },
  { id: 'item3', content: '아이템3' },
];

const BoardComponent = () => {
  const { id } = useParams();
  console.log(id);
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
            <S.DndBox>
              <DragDropContextComponent items={ItemsData} />
            </S.DndBox>
            {rightSide && <RightSide />}
          </S.FlexBox>
        </S.MainDisplay>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
