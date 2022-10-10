import { createSlice } from "@reduxjs/toolkit"

export const tagSlice = createSlice({
    name: "tags",
    initialState: {
        tagList: [],
        isLoading: true

    },
    reducers: {
        setTags: (state, action) => {
            return {
                ...state,
                tagList: action.payload,
                isLoading: false
            }
        },

    }
})
