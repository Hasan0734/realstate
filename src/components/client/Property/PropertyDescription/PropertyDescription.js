import React from "react";

const PropertyDescription = ({property}) => {
  return (
    <>
      <div className="pb-4 mb-3">
        <h2 className="h4 text-dark pt-4 mt-3">Seller&apos;s Description</h2>
        <p className="text-dark opacity-70 mb-1">
       {property.description}
        </p>
        
      </div>
    </>
  );
};

export default PropertyDescription;
