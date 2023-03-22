import { combineReducers } from 'redux';
import { persistedReducer } from './storage';

const rootReducer = combineReducers({
  persistedReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
