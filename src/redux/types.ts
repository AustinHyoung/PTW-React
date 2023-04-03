// dnd
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

// action parameter type
export type PathPayload = {
  id: string;
  payload?: {
    num: number;
  };
};
