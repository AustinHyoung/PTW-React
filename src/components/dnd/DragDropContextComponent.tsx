import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as actions from '../../redux/action/actions';
import Board from './Board';

interface Props {
  id: string;
}

const DragDropContextComponent = (props: Props) => {
  const { id } = props;

  const dispatch = useDispatch();
  //const { boards, currentBoard, board = boards[currentBoard] } = useSelector((state: RootState) => state.app);

  const board = useSelector((state: RootState) => state.track.data);

  const handleOnDragEnd = (result: DropResult) => result.destination && dispatch(actions.onDragEnd(result));

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Board boardNo={board.board_no} title={null} cardsList={board.cards_list} />
      </DragDropContext>
    </>
  );
};

export default DragDropContextComponent;
