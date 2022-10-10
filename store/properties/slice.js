import { createSlice } from "@reduxjs/toolkit"
export const propertiesSlice = createSlice({
    name: "properties",
    initialState: {
        propertyList: [],
        isLoading: true
        
    },
    reducers: {

        setProperties: (state, action) => {
            return {
                propertyList: action.payload,
                isLoading: false
            }
 
        }
    }
})
