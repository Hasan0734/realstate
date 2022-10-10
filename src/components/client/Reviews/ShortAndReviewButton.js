import React from "react";

const ShortAndReviewButton = ({ reviews, setSortReviews }) => {
  const handleSort = (e) => {
    if (e.target.value === "newest") {
      setSortReviews(reviews);
    } else if (e.target.value === "oldest") {
      const reversed = reviews.slice().reverse();
      setSortReviews(reversed);
    } else if (e.target.value === "1") {
      const highToLow = reviews.slice().sort((a, b) => b.rating - a.rating);
      setSortReviews(highToLow);
    } else if (e.target.value === "2") {
      const lowToHigh = reviews.slice().sort((a, b) => a.rating - b.rating);
      setSortReviews(lowToHigh);
    }
  };
  return (
    <>
      <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
        <div className="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
          <label className="me-2 pe-1 text-nowrap" htmlFor="review-sorting">
            <i className="fi-arrows-sort text-muted mt-n1 me-2" />
            Sort by:
          </label>
          <select
            onChange={(e) => handleSort(e)}
            className="form-select"
            id="review-sorting"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="1">High rating</option>
            <option value="2">Low rating</option>
          </select>
        </div>
        <a
          className="btn btn-outline-primary"
          href="#modal-review"
          data-bs-toggle="modal"
        >
          <i className="fi-edit me-1" />
          Add review
        </a>
      </div>
    </>
  );
};

export default ShortAndReviewButton;
