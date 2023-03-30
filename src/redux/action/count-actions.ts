import * as types from '../types';

// 액션 함수 생성
export const increase = () => ({
  type: types.INCREASE,
});

export const decrease = () => ({
  type: types.DECREASE,
});

export const numIncrease = (payload: number) => ({
  type: types.NUM_INCREASE,
  payload: payload,
});

// 리듀서에서 적용할 액션 타입
export type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof numIncrease>;
