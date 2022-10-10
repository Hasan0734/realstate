import { createSlice } from "@reduxjs/toolkit"

export const propertyCategorySlice = createSlice({
    name: "selectedCategory",
    initialState: {
        selected: null
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            return {
                ...state,
                selected: action.payload,
                
            }
        },

    }
})
