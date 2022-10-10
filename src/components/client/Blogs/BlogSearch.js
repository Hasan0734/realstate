import React from "react";

const BlogSearch = ({handleSearch}) => {
  return (
    <>
      <div className="position-relative pb-2 pb-lg-0 mb-4">
        <input
          className="form-control pe-5"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <i className="fi-search text-muted position-absolute top-50 end-0 translate-middle-y me-3" />
      </div>
    </>
  );
};

export default BlogSearch;
