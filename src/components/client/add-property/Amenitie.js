import React from "react";
import { useSelector } from "react-redux";
import slugify from "slugify";
const Amenitie = ({amenitie, handleCheckBox}) => {
  const { property} = useSelector(state => state);
  return (
    <>
      <div className="form-check">
        <input
          onChange={(e) => handleCheckBox(e)}
          name="amenities"
          className="form-check-input"
          type="checkbox"
          id={slugify(amenitie)}
          value={amenitie}
          checked={property?.details?.amenities.includes(amenitie)}
        />
        <label className="form-check-label" htmlFor={slugify(amenitie)}>
          {amenitie}
        </label>
      </div>
    </>
  );
};

export default Amenitie;
