import { configureStore } from '@reduxjs/toolkit';
import commitReducer from '../features/commits/commitSlice';

export const store = configureStore({
  reducer: {
    commits: commitReducer,
  },
});
