import React from "react";
import { useDispatch } from "react-redux";
import { setSortProperty } from "../../../../store/propertySort/actions";

const PropertySorting = ({ properties, filterData, amenitiesData }) => {
  const dispatch = useDispatch()
  const handleSort = (e) => {
    if (e === "newest") {
      if (filterData && !amenitiesData) {
        const reversed = filterData.slice().reverse();
        dispatch(setSortProperty(reversed));
      } else if (!filterData && amenitiesData) {
        const reversed = amenitiesData.slice().reverse();
        dispatch(setSortProperty(reversed));
      } else  {
        const reversed = properties.slice().reverse();
        dispatch(setSortProperty(reversed));
      }
    } else if (e === "0") {
      if (filterData && !amenitiesData) {
        const lowToHigh = filterData.slice().sort((a, b) => a.monthlyRent - b.monthlyRent);
        dispatch(setSortProperty(lowToHigh));
      } else if (!filterData && amenitiesData) {
        const lowToHigh = amenitiesData.slice().sort((a, b) => a.monthlyRent - b.monthlyRent);
        dispatch(setSortProperty(lowToHigh));
      } else  {
        const lowToHigh = properties.slice().sort((a, b) => a.monthlyRent - b.monthlyRent);
       dispatch(setSortProperty(lowToHigh));
      }

     
    } else if (e === "1") {
      if (filterData && !amenitiesData) {
        const highToLow = filterData.slice().sort((a, b) => b.monthlyRent - a.monthlyRent);
        dispatch(setSortProperty(highToLow))
      } else if (!filterData && amenitiesData) {
        const highToLow = amenitiesData.slice().sort((a, b) => b.monthlyRent - a.monthlyRent);
        dispatch(setSortProperty(highToLow))
      } else  {
        const highToLow = properties.slice().sort((a, b) => b.monthlyRent - a.monthlyRent);
        dispatch(setSortProperty(highToLow))
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
        <div className="d-flex align-items-center flex-shrink-0">
          <label className="fs-sm me-2 pe-1 text-nowrap" htmlFor="sortby">
            <i className="fi-arrows-sort text-muted mt-n1 me-2" />
            Sort by:
          </label>
          <select
            onClick={(e) => handleSort(e.target.value)}
            className="form-select form-select-sm"
            id="sortby"
          >
            <option selected>Choise</option>
            <option value="newest">Newest</option>
            <option value="0">Rent Low to High</option>
            <option value="1">Rent High to Low</option>
          </select>
        </div>
        <hr className="d-none d-sm-block w-100 mx-4" />
        <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
          <i className="fi-check-circle me-2" />
          <span className="fs-sm mt-n1">
            <span>
              {!filterData && !amenitiesData && properties?.length}
              {filterData && !amenitiesData && filterData?.length}
              {!filterData && amenitiesData && amenitiesData?.length}{" "}
            </span>
            results
          </span>
        </div>
      </div>
    </>
  );
};

export default PropertySorting;
