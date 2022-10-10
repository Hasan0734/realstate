import { createSlice } from "@reduxjs/toolkit"

export const amenitiesDataSlice = createSlice({
    name: "amenitiesData",
    initialState: {
        dataList: null,
        isLoading: true

    },
    reducers: {
        setAmenitiesData: (state, action) => {
            return {
                ...state,
                dataList: action.payload,
                isLoading: false
            }
        },

    }
})
