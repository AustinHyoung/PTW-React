import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './info';
import { listReducer } from './list';

const rootReducer = combineReducers({
  info: infoReducer,
  list: listReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export default rootReducer;

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
