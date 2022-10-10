import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        isUser: false,
    },
    reducers: {

        userLogin: (state, action) => {
            return {
                ...state,
                isUser: true,
                user: action.payload.user
            }
 
        },

        userLogout: (state, action) => {
            return {
                ...state,
                isUser: false,
                user: null
            }
        }
    }
})
