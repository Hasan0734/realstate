import React from "react";
import dateFormat from "dateformat";
const ReviewCard = ({ data }) => {
    const ratingArray =[]
    for (let i = 1; i <= data.rating; i++) {
        ratingArray.push(i)
    }
  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <h6 className="text-success py-1">
              {ratingArray.map((rat, i) => <i style={{fontSize: '17px'}} key={i} className=" fi-star-filled active" />)}
              
              </h6>
              <h6 className="text-warning py-1">{dateFormat(data.createdAt, "mmm d, yyyy")}</h6>
            </div>
            <h4 className="card-subtitle text-capitalize">{data.name}</h4>
            <p className="mb-0">Email: {data.email}</p>
          </div>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
