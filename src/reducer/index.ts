import { combineReducers } from 'redux';
import counter from './counter';
import session from './session';

const rootReducer = combineReducers({
  counter,
  session,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
