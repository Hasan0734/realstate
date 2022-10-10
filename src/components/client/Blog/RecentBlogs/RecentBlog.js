import React from "react";
import dateFormat from "dateformat";
const RecentBlog = ({ blog }) => {
  return (
    <>
      <div className="d-flex  align-items-center border-bottom border-light pb-3 mb-3">
        <a className="flex-shrink-0" href="#">
          <img className="rounded-3" src={blog.image} width={100} alt="Image" />
        </a>
        <div className="ps-3">
          <a
            className="fs-xs text-uppercase text-primary text-decoration-none"
            href="#"
          >
            Guide
          </a>
          <h4 className="fs-base pt-1 mb-2">
            <a className="nav-link text-capitalize" href="#">
              {blog.title}
            </a>
          </h4>
          <div className="d-flex fs-xs">
            <span className="me-2 pe-1">
              <i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle" />
             {dateFormat(blog?.createdAt, "mmm dd")}
            </span>
            <span>
              <i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle" />
              {blog.comments.length > 0 ? blog.comments?.length : "No"} comments
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlog;
