import { mdiChat, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/reducer';
import * as Icons from '../styles/iconStyles';
import * as S from '../styles/styles';
import DragDropContextComponent from './dnd/DragDropContextComponent';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';

interface listProps {
  cards_list_no: number;
  board_no: number;
  title: string;
}

const BoardComponent = () => {
  const { id } = useParams();
  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:8080/apis/cardlist/${id}`);
    return data;
  };

  const { data } = useQuery('data', fetchData);
  console.log(data);

  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);

  const info = useSelector((state: RootState) => state.persistedReducer.data);

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
              <DragDropContextComponent items={data} />
            </S.DndBox>
            {rightSide && <RightSide />}
          </S.FlexBox>
        </S.MainDisplay>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
