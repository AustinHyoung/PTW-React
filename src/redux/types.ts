// dnd
export const INIT_BOARD = 'INIT_BOARD' as const;

export const ADD_COLUMN = 'ADD_COLUMN' as const;
export const EDIT_COLUMN = 'EDIT_COLUMN' as const;
export const DELETE_COLUMN = 'DELETE_COLUMN' as const;

export const ADD_CARD = 'ADD_CARD' as const;
export const EDIT_CARD = 'EDIT_CARD' as const;
export const DELETE_CARD = 'DELETE_CARD' as const;

export const ON_DRAG_END = 'ON_DRAG_END' as const;

// user info
export const SET_INFO = 'user/SET_INFO' as const;

// test counter
export const INITCOUNT = 'counter/INIT' as const;
export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;
export const NUM_INCREASE = 'counter/NUM_INCREASE' as const;

// action parameter type counter
export type PathPayload = {
  id: string;
  payload?: {
    num: number;
  };
};

//
export interface ColumnProps {
  id: string;
  title: string;
  cards: CardsProps[];
}

export interface CardsProps {
  id: string;
  title: string;
}

export interface BoardProps {
  id: string;
  title: string;
  columns: ColumnProps[];
}

/// //// ///
export interface CardsListProps {
  cards_list_no: number;
  title: string;
  card: CardProps[];
}

export interface CardProps {
  card_no: number;
  contents: string;
}

export interface BoardsProps {
  board_no: number;
  title: string;
  cards_list: CardsListProps[];
}
