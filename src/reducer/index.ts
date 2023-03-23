import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { infoReducer } from './infoReducer';
import { listReducer } from './listReducer';
import { cardReducer } from './cardReducer';

const infoPersistConfig = {
  key: 'info',
  storage,
};

const listPersistConfig = {
  key: 'list',
  storage,
};

const cardPersistConfig = {
  key: 'card',
  storage,
};

const rootReducer = combineReducers({
  info: persistReducer(infoPersistConfig, infoReducer),
  list: persistReducer(listPersistConfig, listReducer),
  card: persistReducer(cardPersistConfig, cardReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
