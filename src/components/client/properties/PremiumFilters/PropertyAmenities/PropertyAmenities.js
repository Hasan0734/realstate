import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAmenitiesData } from "../../../../../../store/amenitiesData/actions";
import { setFilterData } from "../../../../../../store/propertyFilterData/actions";
import { amenitesArray } from "../../../../../../__lib__/config";
import Amenities from "./Amenities";
const PropertyAmenities = ({amenities, setAmenities}) => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(setAmenitiesData(amenities))
  }, [amenities, dispatch])


  const handleAmenities = (e) => {
    dispatch(setFilterData({}))
    if (e.target.checked) {
      setAmenities([...amenities, e.target.value])
    }else{
      const filtered = amenities.filter((amenite) => amenite !== e.target.value)
      setAmenities(filtered)
    }
  };

  return (
    <>
      <div className="pb-0 mb-2">
        <h3 className="h6">Amenities</h3>
        <div
          className="overflow-auto"
          data-simplebar
          data-simplebar-auto-hide="false"
          style={{ height: "11rem" }}
        >
          {amenitesArray.map((value, i) => <Amenities amenities={amenities} handleAmenities={handleAmenities} key={i} value={value}/>)}
        </div>
      </div>
    </>
  );
};

export default PropertyAmenities;
