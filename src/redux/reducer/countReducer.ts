import { CounterState, initalState } from '../state/count-state';
import { CounterAction } from '../action/count-actions';
import * as types from '../types';

export function counter(state: CounterState = initalState, action: CounterAction): CounterState {
  switch (action.type) {
    case types.INITCOUNT:
      return { ...state, count: action.payload };
    case types.INCREASE:
      return { ...state, count: state.count + 1 };
    case types.DECREASE:
      return { ...state, count: state.count - 1 };
    case types.NUM_INCREASE:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}
