import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import {
  loadFromSessionStorage,
  sessionStorageMiddleware
} from '../Utils/sessionStorage'

const persistedState = loadFromSessionStorage()

// Configures and creates the Redux store
const store = configureStore({
  reducer: {
    // Mapping our userReducer to the 'user' slice of our state
    user: userReducer
  },
  preloadedState: persistedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sessionStorageMiddleware)
})

// Type of the whole Redux store state
// RootState is inferred from the return type of store.getState()
export type RootState = ReturnType<typeof store.getState>

// AppDispatch type is inferred from the store.dispatch function
// This will be used to dispatch actions throughout the app
export type AppDispatch = typeof store.dispatch

// Export the store to be used in the app
export default store
