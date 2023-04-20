import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import rootReducer from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { middleWare } from './redux/middleware';

const store = createStore(rootReducer, applyMiddleware(middleWare));
const persistor = persistStore(store);
const queryClient = new QueryClient();
axios.defaults.withCredentials = true;

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
