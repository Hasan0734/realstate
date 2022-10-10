import React from "react";
import Layout from "../src/components/client/layout";
import OurPlanBreadcrumb from "../src/components/client/OurPlans/OurPlanBreadcrumb";
import OurPlansSection from "../src/components/client/OurPlans/OurPlanSection/OurPlansSection";
import PlansWork from "../src/components/client/OurPlans/PlansWork/PlansWork";

const OurPlans = () => {
  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        <OurPlanBreadcrumb />
        <h1 className="h2 mb-4" style={{ color: "grey" }}>
          Check your plan
        </h1>
        <h2 className="h3 pb-2 mb-4" style={{ color: "grey" }}>
          Fill your details and we will get back to you
        </h2>

        <OurPlansSection />

        <h2 className="h3 pt-4 pt-md-5 mb-4">How assisted plans work</h2>
        <PlansWork />
      </div>
    </Layout>
  );
};

export default OurPlans;
