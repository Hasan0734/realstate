import React from "react";
import dateFormat from "dateformat";
const ReviewCard = ({review}) => {
    const {name, body, createdAt, rating} = review;
    const ratingArray =[]
    for (let i = 1; i <= rating; i++) {
        ratingArray.push(i)
    }
  return (
    <>
      <div className="mb-4 pb-4 border-bottom">
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center pe-2">
            <img
              className="rounded-circle me-1"
              src="img/rokye-website/Avtar.png"
              width={48}
              alt="Avatar"
            />
            <div className="ps-2">
              <h6 className="fs-base mb-0 text-capitalize">{name}</h6>
              <span className="star-rating">
                {ratingArray.map((rat, i) => <i key={i} className="star-rating-icon fi-star-filled active" />)}
              </span>
            </div>
          </div>
          <span className="text-muted fs-sm">{dateFormat(createdAt, "mmmm dd, yyyy")}</span>
        </div>
        <p>
         {body}
        </p>
        {/* <div className="d-flex align-items-center">
          <button className="btn-like" type="button">
            <i className="fi-like" />
            <span>(3)</span>
          </button>
          <div className="border-end me-1">&nbsp;</div>
          <button className="btn-dislike" type="button">
            <i className="fi-dislike" />
            <span>(0)</span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ReviewCard;
