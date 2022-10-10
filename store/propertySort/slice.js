import { createSlice } from "@reduxjs/toolkit"

export const propertySortSlice = createSlice({
    name: "propertySort",
    initialState: {
    sortData: null,
    },
    reducers: {
        setSortProperty: (state, action) => {
            return {
                ...state,
                sortData: action.payload
            }
        },

    }
})
