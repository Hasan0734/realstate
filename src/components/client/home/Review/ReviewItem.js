import React from "react";

const ReviewItem = ({review}) => {
    const ratingArray =[]
    for (let i = 1; i <= review.rating; i++) {
        ratingArray.push(i)
    }
  return (
    <div className="p-3">
      <div className="card border-0">
        <blockquote className="blockquote card-body">
          <footer className="d-flex align-items-center">
            <img className src="img/rokye-website/Avtar.png" width={90} />
            <div className="ps-5">
              <h6 className="fs-base mb-0 text-capitalize">{review.name}</h6>
              <div className="text-muted fw-normal fs-sm">
              {ratingArray.map((rat, i) => <i 
              style={{fontSize: '17px'}} key={i}
               className="star-rating-icon fi-star-filled active" />)}
              </div>
            </div>
          </footer>
          <div className="pt-5"></div>
          <p>
           {review.body}
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default ReviewItem;
