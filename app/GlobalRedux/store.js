"use client"

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/UserSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})