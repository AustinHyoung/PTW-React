import * as types from '../types';

export type InfoProps = {
  email: string;
  nickname: string;
};

export const setInfo = (payload: InfoProps) => ({
  type: types.SET_INFO,
  payload: payload,
});

export type InfoAction = ReturnType<typeof setInfo>;
