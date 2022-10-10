import React from "react";

const WorkCard = ({data}) => {
  return (
    <>
      <div className="card card-hover card-body px-4 mb-2">
        <div className="form-check">
          <label
            className="form-check-label d-sm-flex align-items-center justify-content-between"
            htmlFor="ad-option-1"
          >
            <span className="d-block px-1">
              <span className="d-block h6 mb-2">
                {data.title}
              </span>
              <span className="d-block mb-2 mb-sm-0">
               {data.description}
              </span>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
