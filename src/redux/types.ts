// dnd
export const INIT_BOARD = 'INIT_BOARD' as const;

export const ADD_COLUMN = 'ADD_COLUMN' as const;
export const EDIT_COLUMN = 'EDIT_COLUMN' as const;
export const DELETE_COLUMN = 'DELETE_COLUMN' as const;

export const ADD_CARD = 'ADD_CARD' as const;
export const EDIT_CARD = 'EDIT_CARD' as const;
export const DELETE_CARD = 'DELETE_CARD' as const;

export const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE' as const;

export const ON_DRAG_END = 'ON_DRAG_END' as const;

// user info
export const SET_INFO = 'user/SET_INFO' as const;

export interface CardsListProps {
  cards_list_no: number | null;
  title: string;
  list_order: number;
  card: CardProps[];
}

export interface CardProps {
  card_no: number | null;
  contents: string;
  card_order: number;
}

export interface BoardsProps {
  board_no: number;
  title: string;
  cards_list: CardsListProps[];
}
