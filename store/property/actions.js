import { propertySlice, userSlice } from "./slice";
const { actions: slice } = propertySlice;

export const setBasic = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setBasic({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setBasic({
            [e.target.name]: e.target.value
        }))
    }
}

export const _setAmenities = value => (dispatch) => {
    dispatch(slice.setDetails({
        amenities: value
    }))
}

export const setLocation = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setLocation({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setLocation({
            [e.target.name]: e.target.value
        }))
    }
}

export const setDetails = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setDetails({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setDetails({
            [e.target.name]: e.target.value
        }))
    }
}

export const setContact = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setContact({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setContact({
            [e.target.name]: e.target.value
        }))
    }
}
export const setMedia = imageUrl => (dispatch) => {
    // if(e.target.value.toUpperCase()==="CHOOSE")
    // {   
    //     dispatch(slice.setContact({
    //         [e.target.name]: null
    //     }))
    // }else{
    //     dispatch(slice.setContact({
    //         [e.target.name]: e.target.value
    //     }))
    // }
    dispatch(slice.setMedia(imageUrl))
        
   
}
export const setRemoveMedia = newArray => (dispatch) => {
    // if(e.target.value.toUpperCase()==="CHOOSE")
    // {   
    //     dispatch(slice.setContact({
    //         [e.target.name]: null
    //     }))
    // }else{
    //     dispatch(slice.setContact({
    //         [e.target.name]: e.target.value
    //     }))
    // }
    dispatch(slice.setRemoveMedia(newArray))
        
   
}


export const forwordStep = () => (dispatch) => {
    dispatch(slice.forwordStep())
}

export const backwordStep = () => (dispatch) => {
    dispatch(slice.backwordStep())
}

export const submitData = () => (dispatch) => {
    dispatch(slice.submitData())
}

