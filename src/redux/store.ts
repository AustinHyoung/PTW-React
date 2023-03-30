import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './reducer/infoReducer';
import { appReducer } from './reducer/reducers';
import storageSession from 'redux-persist/lib/storage/session';
import { counter } from './reducer/countReducer';

const infoPersistConfig = {
  key: 'info',
  storage: storageSession,
};

const countPersistConfig = {
  key: 'count',
  storage: storage,
};

const addPersistConfig = {
  key: 'app',
  storage,
};

const rootReducer = combineReducers({
  info: persistReducer(infoPersistConfig, infoReducer),
  count: persistReducer(countPersistConfig, counter),
  app: persistReducer(addPersistConfig, appReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
