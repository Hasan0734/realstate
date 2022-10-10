import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAmenitiesData } from "../../../../../store/amenitiesData/actions";
import { setSelectedCategory } from "../../../../../store/propertyCategory/actions";
import { setFilterData } from "../../../../../store/propertyFilterData/actions";
import { setSearch } from "../../../../../store/propertySearch/actions";
import { setSortProperty } from "../../../../../store/propertySort/actions";
import { filterData } from "./filterData";
import PropertyCategory from "./PropertyCategory";

const PropertyCategories = ({ filterTab }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    if (category) {
      dispatch(setFilterData(category));
    }
  }, [category, dispatch]);



  const handleCategory = (e) => {
    dispatch(setAmenitiesData([]))
    const name = e.target.name;
    const value = e.target.value;

    if (Boolean(!value)) {
      setCategory((category) => {
        const newData = { ...category };
        delete newData[name];
        return newData;
      });
    } else {
      if (name === "bedrooms" || name === "bathrooms") {
        setCategory((values) => ({ ...values, [name]: Number(value) }));
      } else {
        setCategory((values) => ({ ...values, [name]: value }));
      }
    }

  };


  return (
    <div>
      <div
        className={`tab-pane fade ${
          filterTab === "filter" ? "show active d-block" : "d-none"
        }`}
        id="categories"
        role="tabpanel"
      >
        <div className="pb-4 mb-2">
          {filterData?.map((data, i) => (
            <PropertyCategory
              handleCategory={handleCategory}
              data={data}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCategories;
