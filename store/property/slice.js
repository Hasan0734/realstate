import { createSlice } from '@reduxjs/toolkit';
import { propertyFields } from '../../__lib__/config';


export const propertySlice = createSlice({
    name: "property",
    initialState: {
        ...propertyFields
    },
    reducers: {

        setBasic: (state, action) => {

            return {
                ...state,
                basic: {
                    ...state.basic,
                    ...action.payload
                }
            }
 
        },

        setLocation: (state, action) => {

            return {
                ...state,
                location: {
                    ...state.location,
                    ...action.payload
                }
            }
 
        },

        setDetails: (state, action) => {

            return {
                ...state,
                details: {
                    ...state.details,
                    ...action.payload
                }
            }
 
        },

        setContact: (state, action) => {

            return {
                ...state,
                contact: {
                    ...state.contact,
                    ...action.payload
                }
            }
 
        },
        setMedia: (state, action) => {
            return {
                ...state,
                media: {
                    propertyVideo: null,
                    propertyImage: [...state.media.propertyImage, action.payload]
                }
            }
 
        },
        setRemoveMedia: (state, action) => {
            return {
                ...state,
                media: {
                    propertyVideo: null,
                    propertyImage: action.payload
                }
            }
 
        },

        forwordStep: (state, action) => {

            return {
                ...state,
                position: state.position + 1
            }
        },

        backwordStep: (state, action) => {

            return {
                ...state,
                position: state.position - 1
            }
        },
        submitData: (state, action) => {

            return {
                ...state,
                ...propertyFields
            }
        }
    },
})
