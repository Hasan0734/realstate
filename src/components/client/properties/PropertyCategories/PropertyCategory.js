import React from "react";

const PropertyCategory = ({ data, handleCategory }) => {
 
  return (
    <>
      <select
        name={data.inputName}
        onChange={(e) => handleCategory(e)}
        className="form-select mb-2"
      >
        <option value="" selected>
          {data.name}
        </option>
        {data.options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.opName}
          </option>
        ))}
      </select>
    </>
  );
};

export default PropertyCategory;
