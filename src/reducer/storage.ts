import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const SET_INFO = 'storage/SET_INFO' as const;

export type InfoProps = {
  email: string;
  nickname: string;
};

export const setInfo = (diff: InfoProps) => ({
  type: SET_INFO,
  payload: diff,
});

export const persistConfig = {
  key: 'root',
  storage,
};

type InfoAction = ReturnType<typeof setInfo>;

type InfoState = {
  data: InfoProps | null;
};

const initialState: InfoState = {
  data: null,
};

const info = (state: InfoState = initialState, action: InfoAction) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const persistedReducer = persistReducer(persistConfig, info);
