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

const BoardComponent = () => {
  const info = useSelector((state: RootState) => state.info.data);
  const { id } = useParams();
  console.log('info', info);

  // 상태 조회
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();
  console.log(count);

  // 액션 함수에 디스패치 => 업데이트
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onNumIncrease = (payload: number) => {
    dispatch(numIncrease(payload));
  };

  // const fetchCardsList = async () => {
  //   const { data } = await axios.get(`http://localhost:8080/apis/cardlist/${id}`);
  //   return data;
  // };

  // const fetchCard = async () => {
  //   const { data } = await axios.get(`http://localhost:8080/apis/card/${id}`);
  //   return data;
  // };

  // const queries = useQueries([
  //   { queryKey: 'cardsList', queryFn: fetchCardsList },
  //   { queryKey: 'cards', queryFn: fetchCard },
  // ]);

  // const [cardsList, cards] = queries.map((query) => query.data);

  // console.log('cardsList', cardsList);
  // console.log('cards', cards);

  // const dispatch = useDispatch();
  // dispatch(setList(cardsList));
  // dispatch(setCard(cards));

  // const list = useSelector((state: RootState) => state.list.data);
  // const card = useSelector((state: RootState) => state.card.data);

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
              <S.IconBtn onClick={() => setRightSide((rightSide) => !rightSide)}>
                <Icons.ChatIcon path={mdiChat} size={1} />
              </S.IconBtn>
            </div>
          </S.BoardHeader>
          <S.FlexBox>
            {leftSide && <LeftSide />}
            <S.DndBox>
              {/* <DragDropContextComponent id={id} /> */}
              <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onNumIncrease={onNumIncrease} />
            </S.DndBox>
            {rightSide && <RightSide />}
          </S.FlexBox>
        </S.MainDisplay>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
