import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './reducer/infoReducer';
import { trackReducer } from './reducer/reducers';
import storageSession from 'redux-persist/lib/storage/session';

const infoPersistConfig = {
  key: 'info',
  storage: storageSession,
};

const trackPersistConfig = {
  key: '__pro__track__',
  storage: storage,
};

const rootReducer = combineReducers({
  info: persistReducer(infoPersistConfig, infoReducer),
  track: persistReducer(trackPersistConfig, trackReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
