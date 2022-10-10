import React from "react";

const BlogCategory = ({blogs, categories}) => {
  return (
    <>
      <div className="card card-flush pb-2 pb-lg-0 mb-4">
        <div className="card-body">
          <h3 className="h5">Categories</h3>
         {categories?.map((cate, i) =>  <a
          key={i}
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
           <span className="text-capitalize">{cate.categoryName}</span><span className="text-muted ms-2">(2)</span>
          </a>)}
         
        </div>
      </div>
    </>
  );
};

export default BlogCategory;
