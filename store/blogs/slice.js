import { createSlice } from "@reduxjs/toolkit"
export const blogsSlice = createSlice({
    name: "Blogs",
    initialState: {
        blogList: [],
        isLoading: true
        
    },
    reducers: {

        setBlogs: (state, action) => {
            return {
                blogList: action.payload,
                isLoading: false
            }
 
        }
    }
})
