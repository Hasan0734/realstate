import React from "react";
import { useSelector } from "react-redux";

const ReviewStatics = () => {
  const { reviews } = useSelector((state) => state);
  const { reviewList } = reviews;

  const fiveSatar = reviewList?.filter((review) => review.rating === 5);
  const fourSatar = reviewList?.filter((review) => review.rating === 4);
  const threeSatar = reviewList?.filter((review) => review.rating === 3);
  const twoSatar = reviewList?.filter((review) => review.rating === 2);
  const oneSatar = reviewList?.filter((review) => review.rating === 1);

const fiveStarPercent = (fiveSatar?.length * 100) / reviewList?.length
const fourStarPercent = (fourSatar?.length * 100) / reviewList?.length
const threeStarPercent = (threeSatar?.length * 100) / reviewList?.length
const twoStarPercent = (twoSatar?.length * 100) / reviewList?.length
const onceStarPercent = (oneSatar?.length * 100) / reviewList?.length
  return (
    <>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          5<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${fiveStarPercent}%` }}
            aria-valuenow={fiveStarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          {parseInt(fiveStarPercent)}%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          4<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${fourStarPercent}%` }}
            aria-valuenow={fourStarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          {parseInt(fourStarPercent)}%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          3<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${threeStarPercent}%` }}
            aria-valuenow={threeStarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          {parseInt(threeStarPercent)}%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          2<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${twoStarPercent}%` }}
            aria-valuenow={twoStarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          {parseInt(twoStarPercent)}%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          1<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${onceStarPercent}%` }}
            aria-valuenow={onceStarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          {parseInt(onceStarPercent)}%
        </div>
      </div>
    </>
  );
};

export default ReviewStatics;
