import { combineReducers } from 'redux'

import member from './member/memberslice'
import authSlice from './auth/authSlice'

const rootReducer = combineReducers({
  member,
  authSlice
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
