import React, { useState } from "react";

const BlogShorted = ({handleSelected }) => {

 
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <label className="me-2 mb-0 text-nowrap" htmlFor="sortby">
          <i className="fi-arrows-sort mt-n1 me-2 align-middle opacity-70" />
          Sort by:
        </label>
        <select
          onChange={(e) => handleSelected(e.target.value)}
          className="form-select"
          id="sortby"
        >
        <option selected disabled>Choise</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          {/* <option value="popular">Popular</option> */}
        </select>
      </div>
    </>
  );
};

export default BlogShorted;
