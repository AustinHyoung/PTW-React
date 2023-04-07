import * as types from '../types';
import { CardsProps, BoardsProps } from '../types';

export const initBoard = (payload: BoardsProps) => ({
  type: types.INIT_BOARD,
  payload: payload,
});

export const addColumn = (title: string) => ({
  type: types.ADD_COLUMN,
  payload: title,
});

export const editColumn = (boardNo: number, title: string) => ({
  type: types.EDIT_COLUMN,
  payload: { boardNo, title },
});

export const deleteColumn = (boardNo: number) => ({
  type: types.DELETE_COLUMN,
  payload: boardNo,
});

export const onDragEnd = (payload: any) => ({
  type: types.ON_DRAG_END,
  payload,
});

export const addCard = (payload: { title: string; columnId: string }) => ({
  type: types.ADD_CARD,
  payload,
});

export const deleteCard = (payload: { columnId: string; cardId: string }) => ({
  type: types.DELETE_CARD,
  payload,
});

export const editCard = (payload: { columnId: string; newCard: CardsProps }) => ({
  type: types.EDIT_CARD,
  payload,
});

/////////////////////////////////////

export const addsColumn = (payload: any) => ({
  type: types.ADD_COLUMN,
  payload,
});

export const editsColumn = (payload: any) => ({
  type: types.EDIT_COLUMN,
  payload,
});

export const deletesColumn = (payload: any) => ({
  type: types.DELETE_COLUMN,
  payload,
});

export const onDragEnds = (payload: any) => ({
  type: types.ON_DRAG_END,
  payload,
});

export const addsCard = (payload: any) => ({
  type: types.ADD_CARD,
  payload,
});

export const deletesCard = (payload: any) => ({
  type: types.DELETE_CARD,
  payload,
});

export const editsCard = (payload: any) => ({
  type: types.EDIT_CARD,
  payload,
});
