import { createSlice } from "@reduxjs/toolkit"
export const singlePropertySlice = createSlice({
    name: "blog",
    initialState: {
        propertyData: null,
        
    },
    reducers: {

        setSingleProperty: (state, action) => {
            return {
                propertyData: action.payload
            }
 
        }
    }
})
