import React from 'react'
import movieReducer from './movieSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        movieData: movieReducer,
    },
});

export default store;
