import { createSlice } from "@reduxjs/toolkit"

export const premiumSelectedSlice = createSlice({
    name: "premiumSelectedSlice",
    initialState: {
        premium: null,
        premiumData: []
    },
    reducers: {
        setPremiumSelected: (state, action) => {
            return {
                ...state,
                premium: action.payload,
                
            }
        },
        setPremiumData: (state, action) => {
            return{
                ...state,
                premiumData: action.payload
            }
        }

    }
})
