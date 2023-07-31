import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'

// Configures and creates the Redux store
const store = configureStore({
  reducer: {
    // Mapping our userReducer to the 'user' slice of our state
    user: userReducer
  }
})

// Type of the whole Redux store state
// RootState is inferred from the return type of store.getState()
export type RootState = ReturnType<typeof store.getState>

// AppDispatch type is inferred from the store.dispatch function
// This will be used to dispatch actions throughout the app
export type AppDispatch = typeof store.dispatch

// Export the store to be used in the app
export default store
