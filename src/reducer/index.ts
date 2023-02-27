import { combineReducers } from 'redux';
import counter from './counter';
import { persistedReducer } from './storage';

const rootReducer = combineReducers({
  counter,
  persistedReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
