import { InfoState, initialState } from '../state/info-state';
import { InfoAction } from '../action/info-actions';
import * as types from '../types';

//리듀서
export const infoReducer = (state: InfoState = initialState, action: InfoAction) => {
  switch (action.type) {
    case types.SET_INFO:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
