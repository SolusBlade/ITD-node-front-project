import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import headerReducer from './header/headerSlice';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: [`token`],
};

const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['settings']
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedReducer = persistReducer(persistUserConfig, headerReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    header: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

