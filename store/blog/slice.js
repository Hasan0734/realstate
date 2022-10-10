import { createSlice } from "@reduxjs/toolkit"
export const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogData: null,
        
    },
    reducers: {

        setBlog: (state, action) => {
            return {
                blogData: action.payload
            }
 
        }
    }
})
