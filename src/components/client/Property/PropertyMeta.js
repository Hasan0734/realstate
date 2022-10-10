import React from "react";

const PropertyMeta = () => {
  return (
    <>
      <div className="d-flex flex-wrap border-top border-secondary fs-sm text-dark pt-4 pb-5 pb-md-2">
        <div className="border-end border-dark pe-3 me-3">
          <span className="opacity-70">
            Published: <strong>May 9, 2021</strong>
          </span>
        </div>
        <div className="border-end border-dark pe-3 me-3">
          <span className="opacity-70">
            Ad number: <strong>681013232</strong>
          </span>
        </div>
        <div className="opacity-70">
          Views: <strong>57</strong>
        </div>
      </div>
    </>
  );
};

export default PropertyMeta;
