import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authReducer from './slices/auth'
import usersReducer from './slices/users'

const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

const store = configureStore({
  reducer: rootReducer
})

export default store