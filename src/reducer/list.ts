import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const SET_LIST = 'storage/SET_LIST' as const;

export type ListProps = {
  email: string;
  nickname: string;
};

export const setList = (diff: ListProps) => ({
  type: SET_LIST,
  payload: diff,
});

export const persistConfig = {
  key: 'list',
  storage,
};

type ListAction = ReturnType<typeof setList>;

type ListState = {
  data: ListProps | null;
};

const initialState: ListState = {
  data: null,
};

const list = (state: ListState = initialState, action: ListAction) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const persistedListReducer = persistReducer(persistConfig, list);
