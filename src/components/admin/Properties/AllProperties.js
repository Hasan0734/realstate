import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { setProperties } from "../../../../store/properties/actions";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import PropertyCard from "./PropertyCard";

const AllProperties = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state);
  const { propertyList } = properties;
  useEffect(() => {
    dispatch(setProperties());
  }, []);

  return (
    <secttion>
      <div className="row">
        {propertyList?.length > 0 ? (
          propertyList?.map((cont, i) => <PropertyCard index={i} key={i} data={cont} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <GridLoader color={"#27d37f"} loading={true} size={8} />
            </div>
          </div>
        )}
      </div>
    </secttion>
  );
};

export default AllProperties;
