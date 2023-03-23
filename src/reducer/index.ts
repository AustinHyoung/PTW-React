import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './infoReducer';
import { listReducer } from './listReducer';

const infoPersistConfig = {
  key: 'info',
  storage,
};

const listPersistConfig = {
  key: 'list',
  storage,
};

const rootReducer = combineReducers({
  info: persistReducer(infoPersistConfig, infoReducer),
  list: persistReducer(listPersistConfig, listReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
