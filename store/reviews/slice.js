import { createSlice } from "@reduxjs/toolkit"

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        reviewList: [],
        isLoading: true

    },
    reducers: {
        setReviews: (state, action) => {
            return {
                ...state,
                reviewList: action.payload,
                isLoading: false
            }
        },

    }
})
