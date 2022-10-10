import {  getDataWithReq } from '../../__lib__/helpers/HttpService';
import { amenitiesDataSlice } from "./slice";
const { actions: slice } = amenitiesDataSlice;

export const setAmenitiesData = (amenities) => (dispatch) => {
 if (amenities.length > 0) {
  getDataWithReq('/properties/a/', amenities)
  .then(response => dispatch(slice.setAmenitiesData(response)))
 }else{
  
  dispatch(slice.setAmenitiesData(null))
 }
}
