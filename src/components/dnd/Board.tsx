import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { addColumn, deleteColumn, editColumn } from '../../redux/action/actions';
import { CardsListProps } from '../../redux/types';
import Column from './Column';
import AddColumn from './AddColumn';
import * as S from '../../styles/styles';

interface Props {
  boardNo: number;
  title: string;
  cardsList: CardsListProps[];
}

const Board = ({ boardNo, cardsList, title }: Props) => {
  const dispatch = useDispatch();

  console.log(boardNo, cardsList, title);

  // dnd의 id는 string만 됨
  const strBoardNo = String(boardNo);

  const handleOnAddColumn = (title: string) => dispatch(addColumn(title));

  const handleOnDeleteColumn = (boardNo: number) => () => dispatch(deleteColumn(boardNo));

  const handleOnEditColumn = (boardNo: number) => (title: string) => dispatch(editColumn(boardNo, title));

  return (
    <>
      <Droppable droppableId={strBoardNo} type="BOARD" direction="horizontal">
        {(provided) => {
          return (
            <S.DroppableBoard {...provided.droppableProps} ref={provided.innerRef}>
              {cardsList.map(({ cards_list_no, title, card, list_order }) => (
                <S.CardsListSpace key={cards_list_no}>
                  <Column
                    {...{
                      listOrder: list_order,
                      cardsListNo: cards_list_no,
                      card,
                      title,
                      handleOnDeleteColumn: handleOnDeleteColumn(cards_list_no),
                      handleOnEditColumn: handleOnEditColumn(cards_list_no),
                    }}
                    key={cards_list_no}
                  />
                </S.CardsListSpace>
              ))}
              {provided.placeholder}
              <S.AddColumnSpace>
                <AddColumn handleOnAddColumn={handleOnAddColumn} />
              </S.AddColumnSpace>
            </S.DroppableBoard>
          );
        }}
      </Droppable>
    </>
  );
};

export default Board;
