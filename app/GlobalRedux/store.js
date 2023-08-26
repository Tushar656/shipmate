"use client"

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/UserSlice';


const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})