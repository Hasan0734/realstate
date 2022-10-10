import React, { useState } from 'react';
import slugify from 'slugify';
const Amenities = ({value, handleAmenities, amenities }) => {
    return (
        <>
          <div className="form-check">
            <input onClick={(e) => handleAmenities(e)}
            checked={amenities.includes(value)}
            value={value}
            className="form-check-input" type="checkbox" id={slugify(value)} />
            <label className="form-check-label fs-sm" htmlFor={slugify(value)}>
              {value}
            </label>
          </div>   
        </>
    );
};

export default Amenities;