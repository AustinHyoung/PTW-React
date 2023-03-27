import * as types from './types';

export const addColumn = (payload: { title: string }) => ({
  type: types.ADD_COLUMN,
  payload,
});

export const editColumn = (payload: { title: string; columnId: string }) => ({
  type: types.EDIT_COLUMN,
  payload,
});

export const deleteColumn = (payload: { columnId: string }) => ({
  type: types.DELETE_COLUMN,
  payload,
});

export const onDragEnd = (payload: any) => ({
  type: types.ON_DRAG_END,
  payload,
});

export const addCard = (payload: any) => ({
  type: types.ADD_CARD,
  payload,
});

export const deleteCard = (payload: any) => ({
  type: types.DELETE_CARD,
  payload,
});

export const editCard = (payload: any) => ({
  type: types.EDIT_CARD,
  payload,
});