import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from './store'

// Custom hook to dispatch actions with the type of AppDispatch
// This gives us type checking for the actions we dispatch
// Use this throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Custom hook to select state from the store with the type of RootState
// This gives us type checking and autocompletion for the state we select
// Use this throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
