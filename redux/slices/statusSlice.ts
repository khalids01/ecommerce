import { createSlice } from '@reduxjs/toolkit'
import type { StatusType } from '../types'

const initialState = {
    isLoggedIn: false,
    verified: false
}

export const statusSlice = createSlice({
    name: 'Status',
    initialState,
    reducers: {
        login: (state: StatusType) => {
            state.isLoggedIn = true
        },
        logout: (state: StatusType) => {
            state.isLoggedIn = false
        },
        verify: (state: StatusType) => {
            state.verified = true
        }
    }
})

export const { login, logout, verify } = statusSlice.actions

export default statusSlice