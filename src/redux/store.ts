import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './reducer/infoReducer';
import { appReducer } from './reducer/reducers';
import storageSession from 'redux-persist/lib/storage/session';

const infoPersistConfig = {
  key: 'info',
  storage: storageSession,
};

const addPersistConfig = {
  key: 'app',
  storage,
};

const rootReducer = combineReducers({
  info: persistReducer(infoPersistConfig, infoReducer),
  app: persistReducer(addPersistConfig, appReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
