import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';

const store = configureStore({
  reducer: {
    // Add the API reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
