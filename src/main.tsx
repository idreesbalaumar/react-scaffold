import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import ErrorHandler from './helpers/error.helper.ts';
import './index.css';
import { persistor, store } from './redux-store/index.ts';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: Error) =>
      ErrorHandler.parser(error)
  }),
  mutationCache: new MutationCache({
    onError: (error: Error) => ErrorHandler.parser(error)
  })
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
)