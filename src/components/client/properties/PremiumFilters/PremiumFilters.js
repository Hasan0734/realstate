import React, { useState, useEffect } from "react";
import PropertyAmenities from "./PropertyAmenities/PropertyAmenities";
import { filterOptions } from "./filterOptions";
import PremiumOptions from "./PremiumOptions";
import { setPremiumSelected } from "../../../../../store/premiumSelect/actions";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../../../store/propertyCategory/actions";
import { setFilterData } from "../../../../../store/propertyFilterData/actions";
import { setAmenitiesData } from "../../../../../store/amenitiesData/actions";
const PremiumFilters = ({ filterTab }) => {
  const dispatch = useDispatch();
  const [premium, setPremium] = useState(undefined);
  const [amenities, setAmenities] = useState([])


  useEffect(() => {
    if (premium) {
      dispatch(setFilterData(premium));
    }
  }, [premium, dispatch]);


  const handlePremium = (e) => {
    dispatch(setAmenitiesData([]))
    const name = e.target.name;
    const value = e.target.value;
    if (Boolean(!value)) {
      setPremium((premium) => {
        const newData = { ...premium };
        delete newData[name];
        return newData;
      });
    } else {
      setPremium((values) => ({ ...values, [name]: value }));
    }
  };

  return (
    <>
      <div
        className={`tab-pane fade ${
          filterTab === "premium" ? "show active d-block" : "d-none"
        }`}
        id="filters"
        role="tabpanel"
      >
        <div className="pb-4 mb-2">
          {filterOptions.map((field, i) => (
            <PremiumOptions
              handlePremium={handlePremium}
              key={i}
              field={field}
            />
          ))}
        </div>
        <PropertyAmenities setAmenities={setAmenities}  amenities={amenities}/>
        <div className="border-top py-2">
          <button
            onClick={() => {
              setAmenities([])
              dispatch(setAmenitiesData([]))
            }}
          className="btn btn-outline-primary" type="button">
            <i className="fi-rotate-right me-2" />
            Reset filters
          </button>
        </div>
      </div>
    </>
  );
};

export default PremiumFilters;
