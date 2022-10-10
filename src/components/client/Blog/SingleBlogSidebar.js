import React from "react";
import Subcriber from "../Blogs/Subcriber";
import BlogAuthor from "./BlogAuthor";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const SingleBlogSidebar = ({}) => {
  return (
    <>
      <aside className="col-lg-4">
        <div
          className="offcanvas offcanvas-end offcanvas-collapse"
          id="blog-sidebar"
        >
          <div className="offcanvas-header shadow-sm mb-2">
            <h2 className="h5 mb-0">Sidebar</h2>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="offcanvas"
            />
          </div>
          <div className="offcanvas-body">
            {/* Search*/}
            <div className="position-relative pb-3 pb-lg-0 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
              />
              <i className="fi-search position-absolute top-50 end-0 translate-middle-y text-muted me-3" />
            </div>
            {/* Author widget*/}
            <BlogAuthor />
            {/* Recent posts widget*/}
            <RecentBlogs />
            {/* Fetured posts carousel widget*/}
            {/* <BlogFeturedPosts /> */}
            {/* Subscription form*/}
            <Subcriber />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SingleBlogSidebar;
