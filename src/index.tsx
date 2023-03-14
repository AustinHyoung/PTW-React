import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import rootReducer from './reducer';
import { QueryClient, QueryClientProvider } from 'react-query';

const store = createStore(rootReducer);
const persistor = persistStore(store);
const queryClient = new QueryClient();

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

// const rootElement = document.getElementById('root');
// render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <App />
//       </QueryClientProvider>
//     </Provider>
//   </BrowserRouter>,
//   rootElement,
// );
