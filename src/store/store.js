import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactListSlise/contactListSlise';
import filterReducer from './filterSlise/filterSlise';
import persistedAuthReducer from './authSlise/authSlise';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


//   const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
//   };


export const store = configureStore({
    reducer: {
        //auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedAuthReducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    //    devTools: process.env.NODE_ENV === 'developent',
        // contactApi.middleware,
      ],

  });


  export const persistor = persistStore(store);