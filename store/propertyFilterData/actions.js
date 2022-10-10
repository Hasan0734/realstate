import { getData, getDataWithReq } from '../../__lib__/helpers/HttpService';
import { filterDataSlice } from "./slice";
const { actions: slice } = filterDataSlice;

export const setFilterData = (items) => (dispatch) => {
 if(Object.entries(items).length === 0 && items.constructor === Object){
   dispatch(slice.setFilterData(null))
 }else{
  getDataWithReq('/properties/c', items)
  .then(response => dispatch(slice.setFilterData(response)))
 }
}
