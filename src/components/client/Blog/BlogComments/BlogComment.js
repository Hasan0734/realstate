import React from "react";
import BlogComReply from "./BlogComReply";
import TimeAgo from 'react-timeago'
const BlogComment = ({comment}) => {
  return (
    <>
      <div className="border-bottom pb-4 mb-4">
        <p>
          {comment?.comment}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center pe-2">
            <img
              className="rounded-circle me-1"
              src="img/rokye-website/Avtar.png"
              width={48}
              alt="Avatar"
            />
            <div className="ps-2">
              <h6 className="fs-base mb-0">{comment.name}</h6>
              <span className="text-muted fs-sm">
              <TimeAgo date={comment?._time} />
                </span>
            </div>
          </div>
          {/* <button className="btn btn-link btn-sm" type="button">
            <i className="fi-reply fs-lg me-2" />
            <span className="fw-normal">Reply</span>
          </button> */}
        </div>
        {/* Reply to comment*/}
       {/* <BlogComReply/> */}
      </div>
    </>
  );
};

export default BlogComment;
