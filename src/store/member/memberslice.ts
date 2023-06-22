import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMember } from '../../interfaces/IMember'

interface MemberState {
  members: IMember[]
}

const initialState: MemberState = {
  members: []
}

const membersSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMembersList: (state, answer: PayloadAction<IMember[]>) => {
      state.members = answer.payload
    },
    addMember: (state, answer: PayloadAction<IMember>) => {
      state.members.push(answer.payload)
    },
    resetMemberList: (state) => {
      state.members = []
    }
  }
})

export const { setMembersList, addMember, resetMemberList } =
  membersSlice.actions

export default membersSlice.reducer
