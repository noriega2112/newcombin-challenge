import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginResponse } from '../../interfaces/IUser'

const initialState: ILoginResponse = {
  iat: 0,
  exp: 0,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjg3NDA3NTU2LCJleHAiOjE2ODc0MDg0NTZ9.HyOgcs-EWYzp3cZ3-e0b5OEIOjOmRWmDd4ycDop1YPI'
}

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setTokenData: (state, action: PayloadAction<ILoginResponse>) => {
      state.iat = action.payload.iat
      state.exp = action.payload.exp
      state.token = action.payload.token
    },
    resetTokenData: (state) => {
      state.iat = 0
      state.exp = 0
      state.token = ''
    }
  }
})

export const { setTokenData, resetTokenData } = authSlice.actions

export default authSlice.reducer
