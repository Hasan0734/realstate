import React from "react";
import { CheckSquare } from "react-feather";

const Amenities = ({property}) => {

  return (
    <>
      <div className="mb-4 pb-md-3">
        <h3 className="h4">Amenities</h3>
        <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
         {property.amenities?.map((amenitie, i) =>  <li key={amenitie} 
         className="col d-flex align-items-center">
            <CheckSquare size={18} className="me-1"/>
            {amenitie}
          </li>)}
        </ul>
      </div>
    </>
  );
};

export default Amenities;
