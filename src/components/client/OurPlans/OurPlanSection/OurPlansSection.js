import React from "react";
import FormCard from "./FormCard";
import PlanCard from "./PlanCard";
import PlanCard2 from "./PlanCard2";

const OurPlansSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-8 mb-4">
          <div className="row">
            <PlanCard />
            <PlanCard2 />
          </div>
        </div>

       <FormCard/>
      </div>
    </>
  );
};

export default OurPlansSection;
