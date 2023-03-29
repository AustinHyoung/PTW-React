import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { addColumn, deleteColumn, editColumn } from '../../reducer/actions';
import { BoardProps } from '../../utils/initData';
import Column from './Column';
import AddColumn from './AddColumn';

const Board = ({ id: boardId, columns, title }: BoardProps) => {
  const dispatch = useDispatch();

  const handleOnAddColumn = (title: string) => dispatch(addColumn({ title }));

  const handleOnDeleteColumn = (columnId: string) => () => dispatch(deleteColumn({ columnId }));

  const handleOnEditColumn = (columnId: string) => (title: string) => dispatch(editColumn({ title, columnId }));

  return (
    <>
      <Droppable droppableId={boardId} type="BOARD" direction="horizontal">
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ display: 'flex', height: '100%', overflowY: 'hidden', border: '1px solid red' }}
            >
              {columns.map(({ id: columnId, cards, title }, index) => (
                <div
                  style={{ height: '100%', display: 'inline-block', verticalAlign: 'top', border: '1px solid blue' }}
                  key={columnId}
                >
                  <Column
                    {...{
                      index,
                      id: columnId,
                      cards,
                      title,
                      handleOnDeleteColumn: handleOnDeleteColumn(columnId),
                      handleOnEditColumn: handleOnEditColumn(columnId),
                    }}
                    key={columnId}
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
