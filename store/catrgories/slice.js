import { createSlice } from "@reduxjs/toolkit"

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categoryList: [],
        isLoading: true

    },
    reducers: {
        setCategories: (state, action) => {
            return {
                ...state,
                categoryList: action.payload,
                isLoading: false
            }
        },

    }
})
