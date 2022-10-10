import Link from "next/link";
import React from "react";
import Costing from "./Costing";
import Feature from "./Feature";
import queryString from "query-string";
import slugify from "slugify";
const SingleContent = ({ property }) => {
  const query = queryString.stringify(
    {
      bedrooms: property.bedrooms + " " + "bed",
      propertyType: property.propertyType,
      areaName: property.areaName , 
      city: property.city,
      state:  property.state,
      id: property._id,
    },
    { sort: false }
  );
  return (
    <>
      <div className="card-body position-relative pb-3">
        <h3 className="h6 mb-2 fs-base">
          <Link href={`property?${query}`}>
            <a className="nav-link stretched-link">
              {property.bedrooms} Bed {property.propertyType}| {property.superArea} sq.ft
            </a>
          </Link>
        </h3>
        <p className="mb-4 fs-sm text-muted text-capitalize">
          {property.areaName} {property.city} in {property.state}
        </p>
        <Feature property={property} />
        <Costing property={property} />
      </div>
    </>
  );
};

export default SingleContent;
