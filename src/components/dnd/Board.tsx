import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { addColumn, deleteColumn, editColumn } from '../../redux/action/actions';
import { CardsListProps } from '../../redux/types';
import Column from './Column';
import AddColumn from './AddColumn';

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
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ display: 'flex', height: '100%', overflowY: 'hidden', border: '1px solid red' }}
            >
              {cardsList.map(({ cards_list_no, title, card, position }) => (
                <div
                  style={{ height: '100%', display: 'inline-block', verticalAlign: 'top', border: '1px solid blue' }}
                  key={cards_list_no}
                >
                  <Column
                    {...{
                      position,
                      cards_list_no,
                      card,
                      title,
                      handleOnDeleteColumn: handleOnDeleteColumn(cards_list_no),
                      handleOnEditColumn: handleOnEditColumn(cards_list_no),
                    }}
                    key={cards_list_no}
                  />
                </div>
              ))}
              {provided.placeholder}
              <div>
                <AddColumn handleOnAddColumn={handleOnAddColumn} />
              </div>
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default Board;
