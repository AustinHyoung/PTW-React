import * as types from '../types';
import { BoardsProps, CardProps } from '../types';

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

export const addCard = (contents: string, cardsListNo: number) => ({
  type: types.ADD_CARD,
  payload: { contents, cardsListNo },
});

export const deleteCard = (cardsListNo: number, cardNo: number, cardOrder: number) => ({
  type: types.DELETE_CARD,
  payload: { cardsListNo, cardNo, cardOrder },
});

export const editCard = (cardsListNo: number, newCard: CardProps) => ({
  type: types.EDIT_CARD,
  payload: { cardsListNo, newCard },
});

export const editBoardTitle = (title: string) => ({
  type: types.EDIT_BOARD_TITLE,
  payload: title,
});
