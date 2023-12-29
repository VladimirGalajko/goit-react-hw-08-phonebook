import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 

import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from './authAsyncThunks';

import persistReducer from 'redux-persist/es/persistReducer';
import { handleFulfilled, handleFulfilledCurrentUser, handleFulfilledLogOut, handlePending, handlePendingCurrentUser, handleRejected, handleRejectedCurrentUser } from './stateFunction';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const customArrThunks = [registerUser, logInUser];
const fn = status => customArrThunks.map(el => el[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
  
    builder 
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePendingCurrentUser)
      .addCase(getCurrentUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(getCurrentUser.rejected, handleRejectedCurrentUser)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const authReducer = authSlice.reducer;
export default persistedAuthReducer;