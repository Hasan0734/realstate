import { createSlice } from "@reduxjs/toolkit"

export const propertySearchSlice = createSlice({
    name: "search",
    initialState: {
    search: null,
    },
    reducers: {
        setSearch: (state, action) => {
            return {
                ...state,
               search: action.payload
            }
        },

    }
})
