import { createSlice } from "@reduxjs/toolkit"

export const filterDataSlice = createSlice({
    name: "filterdata",
    initialState: {
        dataList: null,
        isLoading: true

    },
    reducers: {
        setFilterData: (state, action) => {
            return {
                ...state,
                dataList: action.payload,
                isLoading: false
            }
        },

    }
})
