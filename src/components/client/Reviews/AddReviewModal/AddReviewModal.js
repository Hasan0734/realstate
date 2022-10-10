import React from "react";
import ReviewForm from "./ReviewForm";


const AddReviewModal = () => {
  return (
    <>
      <div className="modal fade" id="modal-review" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
              <h3 className="modal-title mt-4 text-center">Leave a review</h3>
              <button
                className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body px-sm-5 px-4">
             <ReviewForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReviewModal;
