import React from "react";

const AboutStep = () => {
  return (
    <>
      <section className="container mb-5 pb-lg-5 pb-3 pb-sm-4">
        <h2 className="mb-4 pb-2 text-dark text-center">How it works</h2>
        <div className="mx-auto" style={{ maxWidth: "864px" }}>
          <div className="steps steps-dark steps-vertical">
            <div className="step">
              <div className="step-progress">
                <span className="step-progress-end" />
                <span className="step-number bg-primary shadow-hover">1</span>
              </div>
              <div className="step-label">
                <h3 className="h5 mb-2 pb-1 text-dark">
                  Home owners list their property
                </h3>
                <p className="mb-0">
                  After home owners add their property details on our website or
                  fill up our enquiry form and our relationship manager will
                  contact them to verify their details, visit their property and
                  find suitable tenant for their property.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-progress">
                <span className="step-progress-end" />
                <span className="step-number bg-primary shadow-hover">2</span>
              </div>
              <div className="step-label">
                <h3 className="h5 mb-2 pb-1 text-dark">
                  Tenants search and shortlist property
                </h3>
                <p className="mb-0">
                  Tenants can fill up our enquiry form and our relationship
                  manager will contact them to understand their requirements and
                  will start showing them properties once they are ready with
                  shortlist to find suitable home as they desire.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-progress">
                <span className="step-progress-end" />
                <span className="step-number bg-primary shadow-hover">3</span>
              </div>
              <div className="step-label">
                <h3 className="h5 mb-2 pb-1 text-dark">
                  Easiest payment option ever
                </h3>
                <p className="mb-0">
                  No Advance Payment, we believe in service first and pay later
                  policy - We do not charge anything in advance to our
                  customers, they need to pay us only after they decide to rent
                  out any property before we make a rent agreement and hand over
                  keys to them.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-progress">
                <span className="step-progress-end" />
                <span className="step-number bg-primary shadow-hover">4</span>
              </div>
              <div className="step-label">
                <h3 className="h5 mb-2 pb-1 text-dark">
                  Refer &amp; Earn program
                </h3>
                <p className="mb-0">
                  Refer anyone who are owners or Tenants for residential
                  property to us, our relationship manager will contact them to
                  verify their details and you will get paid ₹250 in your UPI
                  once they successfully use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStep;
