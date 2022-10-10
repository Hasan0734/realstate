import React from "react";
import CommentForm from "./CommentForm";

const AddComment = () => {
  return (
    <>
      <div className="bg-secondary py-5">
        <div className="container py-md-2 py-lg-4">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <h3 className="text-center mb-4 pb-sm-2">Leave your comment</h3>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComment;
