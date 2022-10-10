import React from "react";

const AskQuestion = () => {
  return (
    <>
      <section className="container">
        <img
          className="rounded-3"
          src="img/rokye-website/faq.jpg"
          alt="Cover"
        />
        <div
          className="col-md-10 mx-md-auto mx-3 mt-sm-0 mt-5 py-sm-5 py-4 px-0 rounded-3 bg-light shadow-sm"
          style={{ transform: "translateY(-100px)" }}
        >
          <div className="col-md-10 mx-md-auto mx-3 py-lg-4 px-0">
            <h2 className="h3 mb-4 pb-lg-2 text-center">
              Frequently asked questions
            </h2>
            <div className="accordion" id="accordionFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Why my referrel&apos;s listing got rejected?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordionFAQ"
                  id="collapse-1"
                >
                  <div className="accordion-body">
                    We deal in residential properties those are for rent only
                    but if you have referred us any commercial property or
                    residential property for sale, it should be rejected.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    Why didn&apos;t I recive money for my referral?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordionFAQ"
                  id="collapse-2"
                >
                  <div className="accordion-body">
                    We offer referral bonus to you once your referral take our
                    services successfully, if they have not used our services,
                    you are not liable to receive referral bonus.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    How will I get referral bonus?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionFAQ"
                  id="collapse-3"
                >
                  <div className="accordion-body">
                    By UPI on your phone number provided to us by you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AskQuestion;
