import * as types from '../types';
import { CardsProps, BoardsProps, CardProps } from '../types';

export const initBoard = (payload: BoardsProps) => ({
  type: types.INIT_BOARD,
  payload: payload,
});

export const addColumn = (title: string) => ({
  type: types.ADD_COLUMN,
  payload: title,
});

export const editColumn = (cardListNo: number, title: string) => ({
  type: types.EDIT_COLUMN,
  payload: { cardListNo, title },
});

export const deleteColumn = (cardListNo: number, listOrder: number) => ({
  type: types.DELETE_COLUMN,
  payload: { cardListNo, listOrder },
});

export const onDragEnd = (payload: any) => ({
  type: types.ON_DRAG_END,
  payload,
});

export const addCard = (title: string, cardsListNo: number) => ({
  type: types.ADD_CARD,
  payload: { title, cardsListNo },
});

export const deleteCard = (cardsListNo: number, cardNo: number) => ({
  type: types.DELETE_CARD,
  payload: { cardsListNo, cardNo },
});

export const editCard = (cardsListNo: number, newCard: CardProps) => ({
  type: types.EDIT_CARD,
  payload: { cardsListNo, newCard },
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
